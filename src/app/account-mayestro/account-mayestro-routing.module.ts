import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountMayestroComponent } from "./account-mayestro.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

const routes: Routes = [
  {
    path: "",
    component: AccountMayestroComponent, // base template component
    children: [
      { path: "", redirectTo: "login" },
      { path: "login", component: SigninComponent },
      { path: "signup", component: SignupComponent },
      { path: "signup", component: SignupComponent },
      { path: "reset-password/:hashKey", component: ResetPasswordComponent },
      { path: "forget-password", component: ForgetPasswordComponent },
      { path: "change-password", component: ChangePasswordComponent },
      { path: "privacy-and-policy", component: PrivacyPolicyComponent },
      { path: "**", redirectTo: "login" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountMayestroRoutingModule {}
