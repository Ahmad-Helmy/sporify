import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ForgetPasswordComponent } from "./forget-password.component";
import { AccountMayestroService } from "../account-mayestro.service";
import { Observable } from "rxjs";

import "rxjs/add/observable/empty";
import "rxjs/add/observable/throw";
import "rxjs/add/observable/from";

describe("ForgetPasswordComponent", () => {
  let component: ForgetPasswordComponent;
  let service: AccountMayestroService;
  let email: any;

  beforeEach(() => {
    service = new AccountMayestroService(null, null);
    component = new ForgetPasswordComponent(service);
    email = {
      invalid: false,
      value: "aaa"
    };
  });

  it("call server if email valid", () => {
    let spy = spyOn(service, "forgetPassword").and.returnValue(
      Observable.empty()
    );

    component.send(email);

    expect(spy).toHaveBeenCalledWith(email.value);
  });

  it("show success page if server response is true", () => {
    spyOn(service, "forgetPassword").and.returnValue(Observable.from([]));

    component.send(email);

    expect(component.errMessage).toBe(false);
  });

  it("show error if server response is error", () => {
    spyOn(service, "forgetPassword").and.returnValue(Observable.throw(""));

    component.send(email);

    expect(component.errMessage).toBe(true);
  });
});
