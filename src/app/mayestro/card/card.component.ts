import { Component, OnInit, Input, Output } from "@angular/core";
import { ICard } from "./card.interface";
import { IPlaylist } from "../mini-card-viewer/playlists.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
/** Card Component class */
export class CardComponent implements OnInit {
  /**
   * Input of type card
   */
  @Input() card: ICard;
  @Input() search: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    // console.log(this.card);
  }
  /**
   * Testing the routings (forgot to delete. It will be deleted in the next phase)
   */
  navigate() {
    if (this.search) {
      let recent = JSON.parse(localStorage.getItem("recent"));
      if (!recent)
        localStorage.setItem("recent", JSON.stringify([this.card.ID]));
      else {
        recent.splice(0, 0, this.card.ID);
        localStorage.setItem("recent", JSON.stringify(recent));
      }
    }
    this.router.navigate(
      this.card.type === "artist"
        ? ["/mayestro/artist", this.card.ID]
        : ["/mayestro/playlist", this.card.ID, this.card.type]
    );
  }
}
