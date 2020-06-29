import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectingComponent } from '../connect/connecting/connecting.component';
import { ConnectComponent } from './connect.component';

const routes: Routes = [ 
  {
  path: "",
    component: ConnectComponent, // base template component
    children: [
      { path: "", pathMatch: "full",redirectTo: "downloader" },
      { path: "downloader", component: ConnectingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule { }
