import { Component, OnInit, Input } from "@angular/core";
import { IArtistCard } from "../artist-card";
@Component({
  selector: "app-cards-container",
  templateUrl: "./cards-container.component.html",
  styleUrls: ["./cards-container.component.css"],
})

/**
 * card container component
 */
export class CardsContainerComponent implements OnInit {
  /**
   * cards array
   */
  @Input() cards: Array<IArtistCard>;

  /**
   * card container title
   */
  @Input() title;

  /**
   * cards type
   */
  @Input() type;

  /**
   * number of visible cards
   */
  end = 3;

  /**
   * @ignore
   */
  constructor() {}

  /**
   * @ignore
   */
  ngOnInit() {}

  /**
   * show more button to show another 3 cards
   */
  showMore() {
    this.end += 3;
  }
}
