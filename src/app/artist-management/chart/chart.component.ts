import { Component, OnInit, Input, Inject } from "@angular/core";
import * as cjs from "../../../assets/canvasjs.min.js";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"],
})
/**
 * charts component
 */
export class ChartComponent implements OnInit {
  /**
   * listeners data per day , month , and year
   */
  listeners;
  /**
   * likes data per day , month , and year
   */
  likes;

  /**
   * call listeners and likes data from serve thes pass it to renderChart function to display it
   * @param data service function refrence to call it
   */
  constructor(@Inject(MAT_DIALOG_DATA) data) {
    data.subscribe((res) => {
      this.listeners = res.listeners;
      this.likes = res.likes;
      this.renderChart("likes per last 24 hours", "", this.likes.kday, "kday");
      this.renderChart(
        "likes per last 30 days",
        "",
        this.likes.kmonth,
        "kmonth"
      );
      this.renderChart(
        "likes per last 12 monthes",
        "",
        this.likes.kyear,
        "kyear"
      );

      this.renderChart(
        "listeners per last 24 hours",
        "",
        this.listeners.lday,
        "lday"
      );
      this.renderChart(
        "listeners per last 30 days",
        "",
        this.listeners.lmonth,
        "lmonth"
      );
      this.renderChart(
        "listeners per last 12 monthes",
        "",
        this.listeners.lyear,
        "lyear"
      );
    });
  }

  /**
   * @ignore
   */
  ngOnInit() {}

  /**
   * render data from array to display it in html element by id
   * @param title chart title
   * @param subtitle chart subtitle
   * @param data chart data
   * @param id htmg id
   */
  renderChart(title, subtitle, data, id) {
    let chart = new cjs.Chart(id, {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: title,
      },
      subtitles: [
        {
          text: subtitle,
        },
      ],
      data: [
        {
          type: "line",
          dataPoints: data,
        },
      ],
    });

    chart.render();
  }
}
