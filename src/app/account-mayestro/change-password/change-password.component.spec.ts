import { ChangePasswordComponent } from "./change-password.component";
import { AccountMayestroService } from "../account-mayestro.service";
import { Observable, observable } from "rxjs";

import "rxjs/add/observable/empty";
import "rxjs/add/observable/throw";
import "rxjs/add/observable/from";
import "rxjs/add/observable/of";

describe("ChangePasswordComponent", () => {
  let component: ChangePasswordComponent;
  let service: AccountMayestroService;
  let pass: any;

  beforeEach(() => {
    service = new AccountMayestroService(null, null);
    component = new ChangePasswordComponent(service);
    pass = {
      oldPassword: {
        valid: true,
        value: "1234"
      },
      newPassword: {
        valid: true,
        value: "5678"
      },
      confirmedPassword: {
        valid: true,
        value: "5678"
      }
    };
  });

  it("invalid function return false if every thing valid", () => {
    expect(
      component.invalid(
        pass.oldPassword,
        pass.newPassword,
        pass.confirmedPassword
      )
    ).toBeFalsy();
  });

  it("call server to change password", () => {
    spyOn(component, "invalid").and.returnValue(false);
    let spy = spyOn(service, "changePassword").and.returnValue(
      Observable.empty()
    );

    component.submit(
      pass.oldPassword.value,
      pass.newPassword.value,
      pass.confirmedPassword.value
    );

    expect(spy).toHaveBeenCalledWith({
      oldPassword: pass.oldPassword.value,
      newPassword: pass.newPassword.value,
      confirmedPassword: pass.confirmedPassword.value
    });
  });

  it("true message if password updated", () => {
    spyOn(component, "invalid").and.returnValue(false);
    let spy = spyOn(service, "changePassword").and.returnValue(Observable.of());

    component.submit(
      pass.oldPassword.value,
      pass.newPassword.value,
      pass.confirmedPassword.value
    );

    expect(component.messageStatus).toBeTruthy();
  });

  it("false message if password does not updated", () => {
    let error = {
      error: {
        message: "error message"
      }
    };
    spyOn(component, "invalid").and.returnValue(false);
    let spy = spyOn(service, "changePassword").and.returnValue(
      Observable.throw(error)
    );

    component.submit(
      pass.oldPassword.value,
      pass.newPassword.value,
      pass.confirmedPassword.value
    );

    expect(component.message).toBe(error.error.message);
  });
});
