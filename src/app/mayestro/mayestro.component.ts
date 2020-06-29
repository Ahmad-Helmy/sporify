import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayestro',
  templateUrl: './mayestro.component.html',
  styleUrls: ['./mayestro.component.css']
})
export class MayestroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /**
   * function to go to the top of window 
   * @param event event get from html
   */
  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
}

}
