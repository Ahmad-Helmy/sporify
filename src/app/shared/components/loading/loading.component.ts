import { Component, OnInit } from "@angular/core";
import { LoadingService } from "../../services/loading.service";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.css"],
})
export class LoadingComponent implements OnInit {
  playLoading = false;
  constructor(private loading: LoadingService) {}

  ngOnInit() {
    this.loading.loading.subscribe((res: any) => {
      this.playLoading = res;
    });
  }
}
