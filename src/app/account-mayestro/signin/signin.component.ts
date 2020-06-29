import { Component, OnInit } from "@angular/core";
import { AccountMayestroService } from "../account-mayestro.service";
import { Router } from "@angular/router";

/**
 * component decorator
 */
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})

/**
 * signin component
 */
export class SigninComponent implements OnInit {
  /**
   * error message that display to user if username or password invalid
   */
  errMsg: string;
  /**
   * constructor
   *
   * @param accService account service that include login requests
   */
  constructor(
    private accService: AccountMayestroService, // private authService: AuthService
    private router: Router
  ) {}

  /**
   * @ignore
   */
  ngOnInit() {
    // this.authService.authState.subscribe(user => {
    //   this.user = user;
    //   console.log(this.user);
    //   this.authService.signOut();
    // });
  }
  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  /**
   * disabeld login button if form invalid
   * @param f form object
   */
  invalid(f) {
    return f.invalid;
  }

  /**
   * submit method of login form and send it to server to check if user exist
   *
   * @param f form values to send to server
   */
  submit(f) {
    if (this.invalid(f)) return;
    this.accService.login(f.value).subscribe(
      res => {
        this.router.navigate(["/open.mayestro/overview"]);
      },
      err => {
        console.log(err);
        this.errMsg = "Incorrect username or password.";
      }
    );
  }
}
