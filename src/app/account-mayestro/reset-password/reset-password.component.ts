import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AccountMayestroService } from "../account-mayestro.service";

/**
 * component decorator
 */
@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.css"]
})

/**
 * reset password component
 */
export class ResetPasswordComponent implements OnInit {
  /**
   * hash key
   */
  hash: any;

  /**
   * constructor
   * @param route to set params
   * @param accService account service
   */
  constructor(
    private route: ActivatedRoute,
    private accService: AccountMayestroService
  ) {}

  /**
   * get hash from params
   */
  ngOnInit() {
    this.route.paramMap.subscribe((p: any) => {
      this.hash = p.params["hashKey"];
      console.log(this.hash);
    });
  }

  /**
   * check if password and confirmed are valid or not
   * @param pass password
   * @param repeat confirmed password
   */
  disabled(pass, repeat) {
    return !(pass.valid && repeat.valid && pass.value === repeat.value);
  }

  /**
   * send new password to server
   * @param newPassword password
   * @param confirmedPassword confirmed password
   */
  send(newPassword, confirmedPassword) {
    if (this.disabled(newPassword, confirmedPassword)) return;
    const pass = {
      newPassword: newPassword.value,
      confirmedPassword: confirmedPassword.value
    };
    this.accService.resetPassword(pass, this.hash).subscribe(res => {
      console.log("success reset");
    });
  }
}
