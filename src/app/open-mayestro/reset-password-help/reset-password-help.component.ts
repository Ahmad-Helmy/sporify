import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password-help',
  templateUrl: './reset-password-help.component.html',
  styleUrls: ['./reset-password-help.component.css']
})
export class ResetPasswordHelpComponent implements OnInit {
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
