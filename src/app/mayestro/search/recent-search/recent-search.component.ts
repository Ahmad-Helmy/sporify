import { Component, OnInit, Input } from "@angular/core";
import { ICategory } from "../../mini-card-viewer/category.interface";
import { MayestroService } from "../../mayestro.service";

@Component({
  selector: "recent-search",
  templateUrl: "./recent-search.component.html",
  styleUrls: ["./recent-search.component.css"],
})

/**
 * recent search component
 */
export class RecentSearchComponent implements OnInit {
  /**
   * recent array
   */
  recent: ICategory;

  /**
   *
   * @param service mayestro service
   */
  constructor(private service: MayestroService) {}

  /**
   * get recent search to display it
   */
  ngOnInit() {
    this.service.getRecentSearch().subscribe((res: Array<any>) => {
      console.log(res);
      this.recent = {
        cards: res,
        ID: "recent",
        description: "",
        type: "recent",
        name: "Recent Search",
      };
    });
  }
}
