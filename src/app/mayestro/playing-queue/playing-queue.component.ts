import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { MayestroService } from "../mayestro.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-playing-queue',
  templateUrl: './playing-queue.component.html',
  styleUrls: ['./playing-queue.component.css']
})
export class PlayingQueueComponent implements OnInit {
  name: any;
  artist: any;
  duration: any;
  id: any;
  songs: any[];
  type: string;
  checkindex;
  queuesongs: any[];
  image: any;
  queuesongplay = false;
  exists = false;
  constructor(public playerservice: PlayerService, private service: MayestroService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.playerservice.queue == true) {
      this.name = this.playerservice.songs[this.playerservice.checkindex].name;
      this.artist = this.playerservice.artist;
      this.duration = this.playerservice.songs[this.playerservice.checkindex].duration;
      this.checkindex = this.playerservice.checkindex;
      this.songs = [...this.playerservice.songs];
      this.songs.splice(this.checkindex, 1);
      this.exists = true;
      this.playerservice.x.addEventListener("ended", () => {
        this.checkindex++;
        if (this.checkindex <= this.playerservice.array - 1 && this.playerservice.queueexist == false) {
          if (this.playerservice.queueexist == false) {
            this.playerservice.imageURL = this.image;
            this.name = this.playerservice.songs[this.playerservice.checkindex].name;
            this.artist = this.playerservice.artist;
            this.duration = this.playerservice.songs[this.playerservice.checkindex].duration;
            this.songs = [...this.playerservice.songs];
            this.songs.splice(this.checkindex, 1);

          }
          else {

            // //    console.log("DFFFF");
            // //   this.playerservice.imageURL=this.image;
            // //   this.name = this.playerservice.songs[this.playerservice.checkindex].name;
            // //   this.artist = this.playerservice.artist;
            // //   this.duration = this.playerservice.songs[this.playerservice.checkindex].duration;
            // //   this.songs = [...this.playerservice.songs];
            // //   this.queuesongs.splice(this.checkindex, 1);
            // //   console.log(this.name);
            this.songs.splice(this.checkindex, 1);
          }
          this.songs.splice(this.checkindex - 1, 1);
          this.exists = false;
        } else if (this.playerservice.queueexist == true) {
          this.playerservice.imageURL = this.playerservice.queueimage;
          console.log(this.playerservice.imageURL);
          this.playerservice.queueexist = false;
          // this.playerservice.queueexist=false;
          // console.log("MMM");
          // console.log(this.playerservice.queueexist);
          // this.songs.splice(this.checkindex, 1);
          // this.queuesongs.splice(0,1,this.queuesongs);
          // console.log(this.playerservice.x.src );
          // this.playerservice.name = this.name = this.queuesongs[0].name;
          // this.playerservice.artist = this.artist = this.queuesongs[0].artists[0].name;
          //this.queuesongs.splice(0,0,this.queuesongs);
        }
      })
      if (this.playerservice.queueexist == true) {
        this.queuesongplay = true;
        this.queuesongs = [...this.playerservice.TempSongs];
        this.playerservice.songs.splice(1, 0, this.queuesongs[0]);
        this.playerservice.array = (this.playerservice.array) + 1;
        this.playerservice.x.addEventListener("ended", () => {
          this.queuesongs.splice(0, 1);  ///////////////removed queue item
        })
      }
    }
  }
}