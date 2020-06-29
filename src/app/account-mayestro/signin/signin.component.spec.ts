import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SigninComponent } from "./signin.component";
import { AccountMayestroService } from "../account-mayestro.service";
import { Observable } from "rxjs";

import "rxjs/add/observable/empty";
import "rxjs/add/observable/throw";
import "rxjs/add/observable/from";

describe("SigninComponent", () => {
  let component: SigninComponent;
  let service: AccountMayestroService;

  beforeEach(() => {
    service = new AccountMayestroService(null, null);
    component = new SigninComponent(service, null);
  });

  it("invalid return false if form is invalid", () => {
    let form = {
      invalid: false
    };

    expect(component.invalid(form)).toBeFalsy();
  });

  it("call server if form valid", () => {
    spyOn(component, "invalid").and.returnValue(false);
    let spy = spyOn(service, "login").and.returnValue(Observable.empty());

    component.submit({ value: "user" });

    expect(spy).toHaveBeenCalledWith("user");
  });

  it("error meassage if server return false ", () => {
    let errMsg = "Incorrect username or password.";
    spyOn(component, "invalid").and.returnValue(false);
    let spy = spyOn(service, "login").and.returnValue(Observable.throw(errMsg));

    component.submit({});

    expect(component.errMsg).toBe(errMsg);
  });
});
