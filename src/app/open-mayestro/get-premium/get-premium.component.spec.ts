import { GetPremiumComponent } from "./get-premium.component";
import { UserService } from "./../user.service";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Observable } from "rxjs";

import "rxjs/add/observable/empty";
import "rxjs/add/observable/throw";
import "rxjs/add/observable/from";

describe("getPremiumComponenet", () => {
  let component: GetPremiumComponent;
  let service: UserService;

  beforeEach(() => {
    service = new UserService(null, null);
    component = new GetPremiumComponent(null, service, null);
  });

  it("invalid return false if form is invalid", () => {
    let form = {
      invalid: false,
    };

    expect(component.invalid(form)).toBeFalsy();
  });

  //   it("call server if form valid", () => {
  //     spyOn(component, "invalid").and.returnValue(false);
  //     let spy = spyOn(service, "toBePremium").and.returnValue(Observable.empty());

  //     component.submit({ email: "email" });

  //     expect(spy).toHaveBeenCalledWith("email");
  //   });

  //   it("error meassage if server return false ", () => {
  //     let errMsg = "Ivalid email";
  //     spyOn(component, "invalid").and.returnValue(false);
  //     let spy = spyOn(service, "toBePremium").and.returnValue(Observable.throw(errMsg));

  //     component.submit({});

  //     expect(component.errMsg).toBe(errMsg);
  //   });
});
