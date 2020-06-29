import { Component, OnInit } from "@angular/core";
import { AccountMayestroService } from "../account-mayestro.service";

/**
 * component decorator
 */
@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"]
})

/**
 * change password component
 */
export class ChangePasswordComponent implements OnInit {
  /**
   * message to show to user after submit
   */
  message = "";

  /**
   * submitted true or false to set message background color
   */
  messageStatus = true;

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
   * check if passwords valid or not
   * @param oldPassword old password
   * @param newPassword new password
   * @param confirmedPassword confirm new password
   */
  invalid(oldPassword, newPassword, confirmedPassword) {
    return !(
      oldPassword.valid &&
      newPassword.valid &&
      confirmedPassword.valid &&
      newPassword.value === confirmedPassword.value
    );
  }

  /**
   * submit passwords to server
   * @param oldPassword old password
   * @param newPassword new password
   * @param confirmedPassword confirm new password
   */
  submit(oldPassword, newPassword, confirmedPassword) {
    if (this.invalid(oldPassword, newPassword, confirmedPassword)) return;
    const pass = {
      oldPassword,
      newPassword,
      confirmedPassword
    };
    this.accService.changePassword(pass).subscribe(
      res => {
        this.message = "Password updated";
        this.messageStatus = true;
      },
      err => {
        this.message = err.error.message;
        this.messageStatus = false;
      }
    );
  }
}
