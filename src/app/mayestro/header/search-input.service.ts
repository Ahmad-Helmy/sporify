import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SearchInputService {
  /**
   * text from input search
   */
  text = new Subject();
  /**
   * @ignore
   */
  constructor() {}
}
