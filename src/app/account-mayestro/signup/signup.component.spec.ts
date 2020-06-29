import { SignupComponent } from "./signup.component";
import { AccountMayestroService } from "../account-mayestro.service";
import { AssetsService } from "src/app/shared/assets/assets.service";
import { Observable } from "rxjs";

import "rxjs/add/observable/empty";
import "rxjs/add/observable/throw";
import "rxjs/add/observable/from";

describe("SignupComponent", () => {
  let component: SignupComponent;
  let service: AccountMayestroService;

  beforeEach(() => {
    service = new AccountMayestroService(null, null);
    component = new SignupComponent(new AssetsService(), service, null);
  });

  it("call server to check if email exist or not", () => {
    let spy = spyOn(service, "checkEmailExist").and.returnValue(
      Observable.empty()
    );

    component.checkEmail("email");

    expect(spy).toHaveBeenCalledWith("email");
  });

  it("mail exist error message to be empty string if email exist", () => {
    let spy = spyOn(service, "checkEmailExist").and.returnValue(
      Observable.from([])
    );

    component.checkEmail("");

    expect(component.mailExist).toBe("");
  });

  it("set mail exist error message if mail doesnt exist", () => {
    let error = "We're sorry, that email is taken.";
    let spy = spyOn(service, "checkEmailExist").and.returnValue(
      Observable.throw(error)
    );

    component.checkEmail("");

    expect(component.mailExist).toBe(error);
  });

  it("return false from invalid function if form is valid", () => {
    let form = {
      valid: true,
      value: {
        email: "testEmail"
      }
    };
    component.ConfirmEmail = "testEmail";
    component.Day = 4;
    component.Month = 0;
    component.Year = 2000;
    component.mailExist = "";

    expect(component.invalid(form)).toBeFalsy();
  });

  it("call server if form valid", () => {
    let form = {
      value: {}
    };
    component.Day = 4;
    component.Month = 4;
    component.Year = 2000;
    spyOn(component, "invalid").and.returnValue(false);
    let spy = spyOn(service, "signup").and.returnValue(Observable.empty());

    component.submit(form);

    expect(spy).toHaveBeenCalled();
  });
});
