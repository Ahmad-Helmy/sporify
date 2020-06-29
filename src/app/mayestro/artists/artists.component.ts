import { Component, OnInit, Input } from "@angular/core";
import { MayestroService } from "../mayestro.service";
// import { ArtistService } from '../artist/artist.service';
import { ActivatedRoute } from "@angular/router";
import { LikeAndFollowService } from "../like-and-follow.service";
import { ICard } from "../card/card.interface";
@Component({
  selector: "app-artists",
  templateUrl: "./artists.component.html",
  styleUrls: ["./artists.component.css"],
})
export class ArtistsComponent implements OnInit {
  FollowedArtists: any[];
  length: any;
  constructor(
    private route: ActivatedRoute,
    private mayestro: MayestroService,
    private followartist: LikeAndFollowService
  ) {}

  ngOnInit() {
    /**
     * gets followed artists
     */
    this.followartist.GetFollowedArtists().subscribe((comp: any) => {
      if (comp) {
        this.FollowedArtists = comp[0].artists;
        this.length = this.FollowedArtists.length;
      } else {
        this.length = 0;
      }
    });
  }
}
