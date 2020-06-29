import { Component, OnInit } from "@angular/core";
import { ArtistManagementService } from "../artist-management.service";
import { switchMap } from "rxjs/operators";
import { combineLatest } from "rxjs";
import { Router } from "@angular/router";
import { LoadingService } from "src/app/shared/services/loading.service";

@Component({
  selector: "app-create-song",
  templateUrl: "./create-song.component.html",
  styleUrls: ["./create-song.component.css"],
})

/**
 * create song component
 */
export class CreateSongComponent implements OnInit {
  /**
   * song image data
   */
  image;

  /**
   * song data
   */
  song;

  /**
   * img url to show the artist befor send to server
   */
  imgUrl;

  /**
   *
   * @param service artist managment service
   * @param router router service
   * @param loading loading service
   */
  constructor(
    private service: ArtistManagementService,
    private router: Router,
    private loading: LoadingService
  ) {}

  /**
   * @ignore
   */
  ngOnInit() {}

  /**
   * set img data and url from input
   * @param event input file data
   */
  uploadImg(event) {
    this.image = event[0];
    const reader = new FileReader();
    reader.readAsDataURL(event[0]);
    reader.onload = (_event) => {
      this.imgUrl = reader.result;
    };
  }

  /**
   * set  data  from input
   * @param event input file data
   */
  uploadSong(event) {
    this.song = event[0];
  }

  /**
   * send data from input to server to create new song
   * @param f form data
   */
  submit(f) {
    this.loading.loading.next(true);
    setTimeout(() => {
      this.service
        .postSong(f.value)
        .pipe(
          switchMap((res: any) => {
            return combineLatest([
              this.service.uploadSongImg(this.image, res.song._id),
              this.service.uploadSongData(this.song, res.song._id),
            ]);
          })
        )
        .subscribe(
          (res) => {
            console.log(res);
            this.router.navigate(["./artist.management/artist"]);
          },
          (err) => {},
          () => {
            this.loading.loading.next(false);
          }
        );
    }, 3000);
  }
}
