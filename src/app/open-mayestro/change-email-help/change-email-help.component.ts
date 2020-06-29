import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-email-help',
  templateUrl: './change-email-help.component.html',
  styleUrls: ['./change-email-help.component.css']
})
export class ChangeEmailHelpComponent implements OnInit {
  EmailAddress=false;
  Password=false;
  Link=false;
  constructor() { }

  ngOnInit() {
  }
  /**
   * to expand first topic on click
   */
  First(){
    this.EmailAddress=!this.EmailAddress;
  }
  /**
   * to expand second topic on click
   */
  Second(){
    this.Password=!this.Password;
  }
  /**
   * to expand third topic on click
   */
  Third(){
    this.Link=!this.Link;
  }
  

}
