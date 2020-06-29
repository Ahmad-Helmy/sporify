import { Component, OnInit } from "@angular/core";
import { ArtistManagementService } from "../artist-management.service";
import { switchMap } from "rxjs/operators";
import { Router } from "@angular/router";
import { LoadingService } from "src/app/shared/services/loading.service";

@Component({
  selector: "app-create-album",
  templateUrl: "./create-album.component.html",
  styleUrls: ["./create-album.component.css"],
})

/**
 * create album component
 */
export class CreateAlbumComponent implements OnInit {
  /**
   * album image data
   */
  image;
  /**
   * album image url to show to artist befor send to server
   */
  imgUrl;

  /**
   * all songs array
   */
  allSongs = [];

  /**
   * album songs that artist choose
   */
  albumSongs = [];

  /**
   *
   * @param service artist management service
   * @param router router service
   * @param loading loading service
   */
  constructor(
    private service: ArtistManagementService,
    private router: Router,
    private loading: LoadingService
  ) {}

  /**
   * get all songs to show to artist to choose from them to the album
   */
  ngOnInit() {
    this.service.getArtistSongs().subscribe((res: any) => {
      res.songs.forEach((s) => {
        const song = {
          name: s.name,
          id: s._id,
        };
        this.allSongs.push(song);
      });
    });
  }

  /**
   * save img data and img url
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
   * push song from all songs to album songs and remove it from album songs
   * @param songs song from all songs array
   */
  selectSong(songs) {
    this.albumSongs.push(this.allSongs.find((s) => s.id == songs.value));
    this.allSongs.splice(
      this.allSongs.findIndex((s) => s.id == songs.value),
      1
    );
  }

  /**
   * push song from album songs to all songs and remove it from all songs
   * @param songs song from album songs array
   */
  deleteSonge(id) {
    this.allSongs.push(this.albumSongs.find((s) => s.id == id));
    this.albumSongs.splice(
      this.albumSongs.findIndex((s) => s.id == id),
      1
    );
  }

  /**
   * submite album data to server to create new album
   * @param f form data
   */
  submit(f) {
    const album = {
      ...f["value"],
      songs: this.albumSongs,
    };
    this.loading.loading.next(true);
    setTimeout(() => {
      this.service
        .postAlbum(album)
        .pipe(
          switchMap((res: any) => {
            return this.service.uploadAlbumImg(this.image, res.album._id);
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
