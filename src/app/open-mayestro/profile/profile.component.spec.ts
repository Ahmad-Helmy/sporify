import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProfileComponent } from "./profile.component";
import { UserService } from "../user.service";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

describe("ProfileComponent", () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let service: UserService;

  beforeEach(() => {
    service = new UserService(null, null);
    component = new ProfileComponent(service, null);
  });
  // it("put things in component", () => {
  //   spyOn(service, "getEmail").and.callFake(() => {
  //     return Observable.from([1, 2, 3]);
  //   });
  //   component.ngOnInit();

  //   expect(component.user.length).toBeGreaterThan(0);
  // });
});
