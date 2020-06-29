import { Injectable } from "@angular/core";
import { AuthService } from "../shared/services/auth.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators/map";
import "rxjs";
import { Observable } from "rxjs";

/**
 * service decorator
 */
@Injectable({
  providedIn: "root"
})

/**
 * account mayestro service to handle all module requests
 */
export class AccountMayestroService {
  /**
   *
   * @param http httpClient to send requests
   * @param auth authentication service
   */
  constructor(private http: HttpClient, private auth: AuthService) {}

  /**
   * login method takes a user and send it to server to check if exist or not
   * @param user user body
   */
  login(user) {
    return this.http.post(this.auth.URL + "/user/login", user).pipe(
      map((res: any) => {
        localStorage.setItem("token", res.token);
      })
    );
  }

  /**
   * signup method to creat new user and send it to server
   * @param user user body
   */
  signup(user) {
    return this.http.post(this.auth.URL + "/user/signup", user).pipe(
      map((res: any) => {
        localStorage.setItem("token", res.token);
      })
    );
  }

  /**
   * logout and remove token
   */
  logout() {
    localStorage.removeItem("token");
  }

  /**
   * send to server to check if email exist or not in signup
   * @param email user email
   */
  checkEmailExist(email) {
    return this.http.get(`${this.auth.URL}/user/mailExist/${email}`);
  }

  /**
   * send email to server to reset his password
   * @param email user email
   */
  forgetPassword(email) {
    return this.http.get(`${this.auth.URL}/user/forgetPassword/${email}`);
  }

  /**
   * send new password to server
   * @param pass new password
   * @param hash hash key that came from server
   */
  resetPassword(pass, hash): Observable<any> {
    return this.http
      .post(`${this.auth.URL}/user/resetPassword?id=${hash}`, pass)
      .pipe(
        map((res: any) => {
          localStorage.setItem("token", res.token);
        })
      );
  }

  /**
   * send to server passwords to change password
   * @param pass new and old passwords
   */
  changePassword(pass) {
    return this.http.post(`${this.auth.URL}/user/changePassword`, pass, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
  }
}
