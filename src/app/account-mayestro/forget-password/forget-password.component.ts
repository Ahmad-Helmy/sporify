import { Component, OnInit } from "@angular/core";
import { AccountMayestroService } from "../account-mayestro.service";

/**
 * component decorator
 */
@Component({
  selector: "app-forget-password",
  templateUrl: "./forget-password.component.html",
  styleUrls: ["./forget-password.component.css"]
})

/**
 * forget password component
 */
export class ForgetPasswordComponent implements OnInit {
  /**
   * user email
   */
  Email: string;

  /**
   * boolean to change to another page if email sended
   */
  reset = false;

  /**
   * to display error message if email dose not exist
   */
  errMessage = false;

  /**
   * hash to test mock server
   */
  hash = "";

  /**
   *
   * @param accService account service
   */
  constructor(private accService: AccountMayestroService) {}

  /**
   * @ignore
   */
  ngOnInit() {}

  /**
   * send user email to server
   * @param email user email
   */
  send(email) {
    if (email.invalid) return;
    this.accService.forgetPassword(email.value).subscribe(
      (res: any) => {
        this.reset = true;
        this.hash = res.hash ? res.hash : "";
      },
      err => {
        this.errMessage = true;
      }
    );
  }
}
