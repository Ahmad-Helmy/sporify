import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ChartComponent } from "../chart/chart.component";
import { IArtistCard } from "../artist-card";
import { ArtistManagementService } from "../artist-management.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})

/**
 * card component
 */
export class CardComponent implements OnInit {
  /**
   * card data
   */
  @Input() card: IArtistCard;
  /**
   * card type
   */
  @Input() type;
  /**
   * edite mode flag to edite or show
   */
  editeMode = false;

  /**
   * all songs array
   */
  allSongs = [];

  /**
   * album songs array
   */
  albumSongs = [];

  /**
   * new name to edite
   */
  newName;
  /**
   * new description to edite
   */
  newDescription;

  /**
   *
   * @param dialog dialog to show charts in it
   * @param service artist managment service
   */
  constructor(
    private dialog: MatDialog,
    private service: ArtistManagementService
  ) {}

  /**
   * set new name and new description to current data
   */
  ngOnInit() {
    this.newName = this.card.name;
    this.newDescription = this.card.description;
  }

  /**
   * open chart data in dialog and pass it service function refrence
   */
  openChart() {
    this.dialog
      .open(ChartComponent, {
        data:
          this.type == "s"
            ? this.service.getArtistSongCharts(this.card._id)
            : this.service.getArtistAlbumCharts(this.card._id),
      })
      .updateSize("1000px", "500px");
  }

  /**
   * send new data to the serve
   */
  openEdite() {
    if (this.type == "s") {
      let newSong: IArtistCard = {
        ...this.card,
        name: this.newName,
        description: this.newDescription,
      };
      this.service.editeSong(newSong).subscribe((res) => {
        this.card = newSong;
        this.editeMode = false;
      });
    } else {
      let newAlbum: IArtistCard = {
        ...this.card,
        name: this.newName,
        description: this.newDescription,
        songs: this.albumSongs,
      };
      this.service.editeAlbum(newAlbum).subscribe((res) => {
        this.card = newAlbum;
        this.albumSongs = [];
        this.allSongs = [];
        this.editeMode = false;
      });
    }
  }

  /**
   * delete song or album
   */
  openDelete() {
    if (this.type == "s") {
      this.service.deleteSong(this.card._id).subscribe((res) => {
        console.log(res);
      });
    } else {
      this.service.deleteAlbum(this.card._id).subscribe((res) => {
        console.log(res);
      });
    }
  }

  /**
   * push song in album songs array
   * @param songs song from all songs
   */
  selectSong(songs) {
    this.albumSongs.push(this.allSongs.find((s) => s.id == songs.value));
    this.allSongs.splice(
      this.allSongs.findIndex((s) => s.id == songs.value),
      1
    );
  }

  /**
   * change mode to edite mode
   */
  enableEditeMode() {
    if (this.type == "a") {
      this.albumSongs = this.card.songs.slice();
      this.service.getArtistSongs().subscribe((res: any) => {
        res.songs.forEach((s) => {
          const song = {
            name: s.name,
            id: s._id,
          };
          this.allSongs.push(song);
        });
        this.editeMode = true;
      });
    } else {
      this.editeMode = true;
    }
  }
}
