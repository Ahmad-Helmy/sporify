import { Component, OnInit } from "@angular/core";
import { MayestroService } from "../mayestro.service";
import { ActivatedRoute } from "@angular/router";
import { PlayerService } from "../player.service";
import { CommentStmt, ThrowStmt } from "@angular/compiler";
import {
  MatSnackBar,
  throwMatDialogContentAlreadyAttachedError,
} from "@angular/material";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.css"],
})
export class PlaylistComponent implements OnInit {
  day;
  month;
  year;

  isLiked = true;
  isPlaying = true;
  album: any[];
  title: string;
  date: Date;
  artist: string;
  id: any;
  type: any;
  imageURL: any;
  totalTracks: number;
  tracks: any[];
  playing = false;
  first = true;

  constructor(
    private MayestroService: MayestroService,
    private route: ActivatedRoute,
    public playerservice: PlayerService,
    private snackbar: MatSnackBar
  ) {}
  /**
   * add songs to library
   */
  add() {
    let snack = this.snackbar.open("added to Your Library", "", {
      duration: 500,
    });
    this.MayestroService.AddAlbum(this.id).subscribe((response) => {});
  }
  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.id = param["id"];
      this.playerservice.ids = this.id;
      this.route.params.subscribe((param) => {
        this.type = param["type"];
        this.playerservice.type = this.type;
        if (this.type == "myplaylist") {
          this.MayestroService.getmyPlaylist(this.id).subscribe((data: any) => {
            console.log(data);
            this.title = data.name;
            this.date = data.releaseDate;
            this.artist = data.owner[0].name;
            this.imageURL = data.image;
            this.totalTracks = data.totalTracks;
            this.date = new Date(this.date);
            this.year = this.date.getFullYear();
            this.playerservice.id = this.id;
            this.MayestroService.songs = data;
          });
        }
        if (this.type == "album") {
          this.MayestroService.getAlbum(this.id).subscribe((data: any) => {
            this.title = data.name;
            this.date = data.releaseDate;
            this.artist = data.artists[0].name;
            this.imageURL = data.image;
            this.totalTracks = data.totalTracks;
            this.date = new Date(this.date);
            this.year = this.date.getFullYear();
            this.MayestroService.playlistimage = this.imageURL;
            this.playerservice.id = this.id;
            this.MayestroService.getTracks(this.id).subscribe((res: any) => {
              this.tracks = res;
              this.MayestroService.songs = res;
            });
          });
        }
        if (this.type == "playlist") {
          this.MayestroService.getPlaylist(this.id).subscribe((data: any) => {
            this.title = data.name;
            this.date = data.releaseDate;
            this.artist = data.owner[0].name;
            this.imageURL = data.image;
            this.totalTracks = data.totalTracks;
            this.date = new Date(this.date);
            this.year = this.date.getFullYear();
            this.playerservice.id = this.id;
            console.log(this.playerservice.id);
            this.MayestroService.playlistimage = this.imageURL;
            this.MayestroService.getPlaylistTracks(this.id).subscribe(
              (res: any) => {
                this.tracks = res;
                this.MayestroService.songs = res;
              }
            );
          });
        }
      });
    });
  }
  /**
   * function to change state of playlist to liked or not
   */
  like() {
    console.log("liked");
    if (this.isLiked == true) this.isLiked = false;
    else this.isLiked = true;
  }
  /**
   * function to change state of song to play or not
   */
  play() {
    this.MayestroService.playlistbuttonpressed = true;
    if (this.type == "myplaylist") {
      this.MayestroService.getMytracks(this.id).subscribe((data: any[]) => {
        this.playerservice.songs = [...data];
        this.playerservice.array = data.length;
        this.playerservice.artist = this.playerservice.songs[0].artists[0].name;
        this.playerservice.imageURL = this.imageURL;
        this.playerservice.x.src = this.playerservice.songs[0].url;
        this.playerservice.name = this.playerservice.songs[0].name;
        this.playerservice.PlayerTemp = data;
      });
    }
    if (this.type == "album") {
      this.MayestroService.getTracks(this.id).subscribe((res: any) => {
        this.tracks = res;
        this.playerservice.songs = [...res];
        this.playerservice.array = res.length;
        this.playerservice.id = res[0].id;
        this.playerservice.artist = this.playerservice.songs[0].artists[0].name;
        this.playerservice.imageURL = this.imageURL;
        this.playerservice.x.src = this.playerservice.songs[0].url;
        this.playerservice.name = this.playerservice.songs[0].name;
        this.playerservice.PlayerTemp = res;
      });
    }
    /////////////////////////
    if (this.type == "playlist") {
      this.MayestroService.getPlaylistTracks(this.id).subscribe((res: any) => {
        this.tracks = res;
        this.playerservice.id = res[0].id;
        this.playerservice.songs = [...res];
        this.playerservice.array = res.length;
        this.playerservice.checkindex = 0;
        this.playerservice.artist = this.playerservice.songs[0].artists[0].name;
        this.playerservice.imageURL = this.imageURL;
        this.playerservice.x.src = this.playerservice.songs[0].url;
        this.playerservice.name = this.playerservice.songs[0].name;
        this.playerservice.PlayerTemp = [...res];
      });
    }

    this.playerservice.value = 0;
    this.isPlaying = false;
    this.playerservice.player = true;
    this.playerservice.play();
  }
  /**
   * pause button to toggle color and call player pause function
   */
  pause() {
    this.isPlaying = true;
    this.playerservice.pause();
  }
  /**
   * add playlist to yourlibrary
   */
  addList() {
    let snack = this.snackbar.open("added to Your Library", "", {
      duration: 500,
    });
    this.MayestroService.AddPlaylist(this.id).subscribe((response) => {});
  }
  /**
   * remove playlist from yourlibrary
   */
  remove() {
    let snack = this.snackbar.open("Playlist deleted", "", { duration: 500 });
    this.MayestroService.RemovePlaylist(this.id).subscribe((response) => {});
  }
}
