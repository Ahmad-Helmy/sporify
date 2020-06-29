import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AccountMayestroRoutingModule } from "./account-mayestro-routing.module";
import { AccountMayestroComponent } from "./account-mayestro.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { HeaderComponent } from "./header/header.component";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared/shared.module";
// import {
//   SocialLoginModule,
//   AuthServiceConfig,
//   FacebookLoginProvider
// } from "angularx-social-login";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { fakeBackendProvider } from '../shared/mock-server/mock-server.service';
import { AccountMayestroService } from './account-mayestro.service';

// const config = new AuthServiceConfig([
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider("2566655633574824")
//   }
// ]);

// export function provideConfig() {
//   return config;
// }

@NgModule({
  declarations: [
    AccountMayestroComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    AccountMayestroRoutingModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    SharedModule,
    HttpClientModule
    // SocialLoginModule
  ],
  // providers: [
  //   {
  //     provide: AuthServiceConfig,
  //     useFactory: provideConfig
  //   }
  // ]
  providers:[fakeBackendProvider,AccountMayestroService]
})
export class AccountMayestroModule {}
