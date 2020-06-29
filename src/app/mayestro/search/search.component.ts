import { Component, OnInit } from "@angular/core";
import { MayestroService } from "../mayestro.service";
import { SearchInputService } from "../header/search-input.service";
import { ICategory } from "../mini-card-viewer/category.interface";
import { PlayerComponent } from "../player/player.component";
import { ICard } from "../card/card.interface";
import { LoadingService } from "src/app/shared/services/loading.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
/**
 * search component
 */
export class SearchComponent implements OnInit {
  /**
   * top result
   */
  top: any;

  /**
   * browse cards
   */
  browse: any;
  /**
   * search input
   */
  input: any;

  /**
   * playlists form search
   */
  playlists = new ICategory();
  /**
   * albums form search
   */
  albums = new ICategory();
  /**
   * artists form search
   */
  artists = new ICategory();

  /**
   *
   * @param mystro mayestro service
   * @param search search service
   * @param loading loading service
   */
  constructor(
    private mystro: MayestroService,
    private search: SearchInputService,
    private loading: LoadingService
  ) {}

  /**
   * get browse cards from server
   */
  ngOnInit() {
    let c = new ICategory();
    let arr;
    this.loading.loading.next(true);
    setTimeout(() => {
      this.mystro.getBrowse().subscribe(
        (res) => {
          this.browse = res["Browse"];
        },
        (err) => {},
        () => {
          this.loading.loading.next(false);
        }
      );
    }, 3000);
    this.searchInput();
  }

  /**
   * listen to search input then send requist with characters
   */
  searchInput() {
    this.loading.loading.next(true);
    this.search.text.subscribe(
      (resp) => {
        this.input = resp;
        console.log(resp);
        this.mystro.getSearch(resp ? resp : "%20").subscribe((res: any) => {
          this.artists = new ICategory();
          this.albums = new ICategory();
          this.playlists = new ICategory();
          this.top = res["topResult"];
          if (res.albums.length > 0) {
            this.albums = {
              ID: "",
              name: "Albums",
              type: "album",
              description: "",
              cards: res.albums,
            };
          }
          if (res.playlists.length > 0) {
            this.playlists = {
              ID: "",
              name: "Playlists",
              type: "playlist",
              description: "",
              cards: res.playlists,
            };
          }
          if (res.artists.length > 0) {
            this.artists = {
              ID: "",
              name: "Artists",
              type: "artist",
              description: "",
              cards: res.artists,
            };
          }
        });
      },
      (err) => {},
      () => {
        this.loading.loading.next(false);
      }
    );
  }
}
