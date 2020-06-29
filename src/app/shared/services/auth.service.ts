import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { JwtHelper, tokenNotExpired } from "angular2-jwt/angular2-jwt";
import "rxjs";

/**
 * service decorator
 */
@Injectable({
  providedIn: "root"
})
/**
 * authentication service
 */
export class AuthService {
  /**
   * server URL
   */
  URL = "http://3.137.69.49:3000";

  /**
   * @ignore
   */
  constructor() {}

  /**
   * check if user logged in or not
   * @returns boolean
   */
  isLoggedIn() {
    return tokenNotExpired("token");
  }

  /**
   * property of current user to get data from token
   * @returns user from token
   */
  get currentUser() {
    const jwt = new JwtHelper();
    const user = jwt.decodeToken(localStorage.getItem("token"));
    return user;
  }
}
