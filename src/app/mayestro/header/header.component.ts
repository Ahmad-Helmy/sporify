import { Component, OnInit, OnChanges } from "@angular/core";
import { Location } from "@angular/common";
import { AuthService } from "src/app/shared/services/auth.service";
import { AccountMayestroService } from "src/app/account-mayestro/account-mayestro.service";
import{Router}from '@angular/router'
import { SearchInputService } from './search-input.service';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
/**
 * Header Cmponent class
 */
export class HeaderComponent implements OnInit, OnChanges {
  logIn: boolean;
  input;
  constructor(
   /**  loc property of type Location */
    private loc: Location,
    /** auth proterty of type AuthService */
    private auth: AuthService,
    /** Injecting AccountMayestroService */
    private acc: AccountMayestroService,
    /** Injecting router class */
    public router: Router,
    private search: SearchInputService
    )
  {
    // console.log(loc.getState());
  }
  
  onKey(e){
    console.log(e.target.value);
    this.search.text.next(e.target.value);
    this.input=e.target.value;
  }

  /** 
   * Check if the user is logged in or not
   */
  loggedIn() {
    return this.auth.isLoggedIn();
  }

  /**
   * assign the logIn boolean to isLoggedIn property of AuthService
   */
  ngOnInit() {
    this.loc.onUrlChange((res, state) => {
      console.log(res);
    });
    this.logIn = this.auth.isLoggedIn();
  }

  /**
   * Testing the location class
   */
  back() {
    this.loc.back();
  }
  ngOnChanges() {}
}
