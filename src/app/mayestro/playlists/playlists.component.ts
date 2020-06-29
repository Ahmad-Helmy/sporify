import { Component, OnInit } from "@angular/core";
import { DialogComponent } from "../dialog/dialog.component";
import { MayestroService } from "../mayestro.service";
import { MatDialog } from "@angular/material";
import { LoadingService } from "src/app/shared/services/loading.service";

@Component({
  selector: "app-playlists",
  templateUrl: "./playlists.component.html",
  styleUrls: ["./playlists.component.css"],
})
export class PlaylistsComponent implements OnInit {
  constructor(
    private service: MayestroService,
    private dialog: MatDialog,
    private loading: LoadingService
  ) {}

  songs: any[];
  length: any;
  ngOnInit() {
    this.loading.loading.next(true);
    /**
     * gets playlists that made by user
     */
    setTimeout(() => {
      this.service.getMyPlaylists().subscribe(
        (data: any[]) => {
          this.songs = data;
          this.length = data.length;
        },
        (err) => {},
        () => {
          this.loading.loading.next(false);
        }
      );
    }, 3000);
  }
  /**
   * opens create playlist dialog box
   */
  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
