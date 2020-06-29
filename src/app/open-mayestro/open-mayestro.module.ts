import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OpenMayestroRoutingModule } from "./open-mayestro-routing.module";
import { OpenMayestroComponent } from "./open-mayestro.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SharedModule } from "../shared/shared.module";
import { OverviewComponent } from "./overview/overview.component";
import { NotificationComponent } from "./notification/notification.component";
import { ProfileComponent } from "./profile/profile.component";
import { SetDevicePasswordComponent } from "./set-device-password/set-device-password.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PremiumComponent } from './premium/premium.component';
import { GetPremiumComponent } from './get-premium/get-premium.component';
import { ChangePlanComponent } from './get-premium/change-plan/change-plan.component';
import { GetPremiumHeaderComponent } from './get-premium/get-premium-header/get-premium-header.component';
import { fakeBackendProvider } from "../shared/mock-server/mock-server.service";
import { UserService } from "./user.service";
import { HomeComponent } from './home/home.component';
import { LoginHelpComponent } from './login-help/login-help.component';
import { EditAccountHelpComponent } from './edit-account-help/edit-account-help.component';
import { NotificationHelpComponent } from './notification-help/notification-help.component';
import { ResetPasswordHelpComponent } from './reset-password-help/reset-password-help.component';
import { ChangeEmailHelpComponent } from './change-email-help/change-email-help.component';
import { SidebarHelpComponent } from './sidebar-help/sidebar-help.component';
import { AccountHelpComponent } from './account-help/account-help.component';
import { UsingMayestroComponent } from './using-mayestro/using-mayestro.component';

@NgModule({
  declarations: [
    OpenMayestroComponent,
    HeaderComponent,
    FooterComponent,
    OverviewComponent,
    NotificationComponent,
    ProfileComponent,
    SetDevicePasswordComponent,
    SidebarComponent,
    ChangePasswordComponent,
    HomeComponent,
    LoginHelpComponent,
    EditAccountHelpComponent,
    NotificationHelpComponent,
    ResetPasswordHelpComponent,
    ChangeEmailHelpComponent,
    SidebarHelpComponent,
    AccountHelpComponent,
    UsingMayestroComponent,
    PremiumComponent, 
    GetPremiumComponent, 
    ChangePlanComponent,
    GetPremiumHeaderComponent
  ],
  imports: [
    CommonModule,
    OpenMayestroRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
   providers:[fakeBackendProvider,UserService]
})
export class OpenMayestroModule {}
