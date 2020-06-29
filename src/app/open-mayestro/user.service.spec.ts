import { UserService } from './user.service';
import { TestBed } from "@angular/core/testing";

import { Observable } from "rxjs";

import "rxjs/add/observable/empty";
import "rxjs/add/observable/throw";
import "rxjs/add/observable/from";

describe("userservice", () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService(null, null);
  });
  console.log("user service test")
  it("set token when submit premium form success called", () => {
    spyOn(service, "toBePremium").and.callFake(t => {
      localStorage.setItem("token", "1234");
      return Observable.empty();
    });

    service.toBePremium(null);

    expect(localStorage.getItem("token")).toBe("1234");
  });

});
