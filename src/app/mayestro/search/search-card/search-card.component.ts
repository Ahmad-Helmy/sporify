import { Component, OnInit, Input } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "search-card",
  templateUrl: "./search-card.component.html",
  styleUrls: ["./search-card.component.css"],
})

/**
 * browse card
 */
export class SearchCardComponent implements OnInit {
  /**
   * browse array
   */
  @Input() browseCards;

  /**
   * card to read from html
   */
  cards = {
    img: "",
    bgColor: "",
    name: "",
  };

  /**
   *
   * @param auth auth to get URL
   */
  constructor(private auth: AuthService) {}

  /**
   * set cards from browse
   */
  ngOnInit() {
    if (this.browseCards) {
      this.cards.bgColor = this.browseCards.color;
      this.cards.img = this.browseCards.imgUrl;
      this.cards.name = this.browseCards.name;
    }
  }
}
