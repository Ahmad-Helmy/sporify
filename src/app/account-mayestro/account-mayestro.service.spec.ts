import { TestBed } from "@angular/core/testing";

import { AccountMayestroService } from "./account-mayestro.service";
import { Observable } from "rxjs";

import "rxjs/add/observable/empty";
import "rxjs/add/observable/throw";
import "rxjs/add/observable/from";

describe("AccountMayestroService", () => {
  let service: AccountMayestroService;

  beforeEach(() => {
    service = new AccountMayestroService(null, null);
  });

  it("set token when login success called", () => {
    spyOn(service, "login").and.callFake(t => {
      localStorage.setItem("token", "1234");
      return Observable.empty();
    });

    service.login(null);

    expect(localStorage.getItem("token")).toBe("1234");
  });

  it("set token when signup success called", () => {
    spyOn(service, "signup").and.callFake(t => {
      localStorage.setItem("token", "1234");
      return Observable.empty();
    });

    service.signup(null);

    expect(localStorage.getItem("token")).toBe("1234");
  });

  it("set token when reset password success called", () => {
    spyOn(service, "resetPassword").and.callFake(t => {
      localStorage.setItem("token", "1234");
      return Observable.empty();
    });

    service.resetPassword(null, null);

    expect(localStorage.getItem("token")).toBe("1234");
  });

  it("remove token when logout called", () => {
    localStorage.setItem("token", "1234");

    service.logout();

    expect(localStorage.getItem("token")).toBeNull();
  });
});
