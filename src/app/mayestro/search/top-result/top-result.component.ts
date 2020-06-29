import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "top-result",
  templateUrl: "./top-result.component.html",
  styleUrls: ["./top-result.component.css"],
})
/**
 * top result card
 */
export class TopResultComponent implements OnInit {
  /**
   * top result array
   */
  @Input() topResult;

  /**
   *
   * @param auth to get URL
   */
  constructor(private auth: AuthService) {}

  /**
   * @ignore
   */
  ngOnInit() {}
}
