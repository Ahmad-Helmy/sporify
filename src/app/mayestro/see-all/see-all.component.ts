import { Component, OnInit, Input, HostListener } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MayestroService } from "../mayestro.service";
import { ICard } from "../card/card.interface";
import { LoadingService } from "src/app/shared/services/loading.service";

@Component({
  selector: "app-see-all",
  templateUrl: "./see-all.component.html",
  styleUrls: ["./see-all.component.css"],
})
/** See All Component class */
export class SeeAllComponent implements OnInit {
  /** properity represents the name of the category */
  requestSeeAll: string;
  /** category object includes the name and type of the current category */
  category = {
    type: "",
    name: "",
  };
  /** Cards array of type ICard */
  cards: Array<ICard> = [];
  /** array of type any */
  cardsArray: Array<any>;
  completed = false;
  color;
  browse;
  start = 0;
  pagination = true;
  constructor(
    private route: ActivatedRoute,
    private mystro: MayestroService,
    private loading: LoadingService
  ) {}

  /**
   *   get the current category name
   *   call getSeeAll method to get the data from the server
   *   filter each category into playlists/albums/artists
   *   push filtered data into the cards array
   */
  ngOnInit() {
    this.route.params.subscribe((p) => {
      this.requestSeeAll = p["name"];
      this.browse = p["browse"];
      if (p["color"]) {
        this.color = p["color"];
      }
      this.completed = true;
      this.getItems();
    });
  }
  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    //In chrome and some browser scroll is given to body tag
    let pos = document.documentElement.scrollTop + window.innerHeight + 20;
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if (pos > max) {
      if (this.pagination) {
        this.getItems();
      }
    }
  }

  getItems() {
    this.loading.loading.next(true);
    this.pagination = false;
    setTimeout(() => {
      this.mystro.getSeeAll(this.requestSeeAll, 18, this.start).subscribe(
        (res: any) => {
          this.start += 18;
          console.log(this.start);
          this.category.name = res.category.name;
          if (res.category.playlists) {
            this.cardsArray = res.category.playlists;
            this.category.type = "playlists";
          } else if (res.category.albums) {
            this.cardsArray = res.category.albums;
            this.category.type = "albums";
          } else if (res.category.artists) {
            this.cardsArray = res.category.artists;
            this.category.type = "artists";
          }
          this.cardsArray.forEach((crd: any) => {
            let desc: string;
            if (this.category.type == "playlists") {
              desc = crd.description;
            } else if (this.category.type == "albums") {
              desc = "";
              crd.artists.forEach((art) => {
                desc += art.name + ",";
              });
              desc = desc.slice(0, desc.length - 1);
            } else if (this.category.type == "artists") {
              desc = crd.artist_name;
            }
            const c: ICard = {
              name: crd.name,
              description: desc,
              imgUrl: crd.image,
              ID: crd.id,
              type: crd.type,
            };
            this.cards.push(c);
          });
          console.log(this.cards);
          this.pagination = true;
        },
        (err) => {},
        () => {
          this.loading.loading.next(false);
        }
      );
    }, 1000);
  }
}
