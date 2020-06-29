import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ResetPasswordComponent } from "./reset-password.component";
import { AccountMayestroService } from "../account-mayestro.service";
import { Observable, from, of } from "rxjs";

import "rxjs-compat/add/observable/empty";
import "rxjs-compat/add/observable/throw";
// import "rxjs-compat/add/observable/from";
import "rxjs";

describe("ResetPasswordComponent", () => {
  let component: ResetPasswordComponent;
  let service: AccountMayestroService;
  let password: object;
  let repeatPassword: object;

  beforeEach(() => {
    service = new AccountMayestroService(null, null);
    component = new ResetPasswordComponent(null, service);
    password = {
      valid: true,
      value: "1234"
    };
    repeatPassword = {
      valid: true,
      value: "1234"
    };
  });

  it("disabled should return false if password and repeated are matched and valid", () => {
    expect(component.disabled(password, repeatPassword)).toBeFalsy();
  });

  it("call server when send password", () => {
    let spy = spyOn(service, "resetPassword").and.returnValue(
      Observable.empty()
    );
    component.hash = "1234";

    component.send(password, repeatPassword);

    expect(spy).toHaveBeenCalledWith(
      { newPassword: "1234", confirmedPassword: "1234" },
      "1234"
    );
  });
});
