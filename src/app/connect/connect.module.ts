import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectingComponent } from './connecting/connecting.component';
import { ConnectComponent } from './connect.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [ConnectingComponent, ConnectComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    ConnectRoutingModule,
    SharedModule,
    MatMenuModule
  ]
})
export class ConnectModule { }
