import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "mayestro" },
  {
    path: "mayestro",
    loadChildren: () =>
      import(`./mayestro/mayestro.module`).then((m) => m.MayestroModule),
  },
  {
    path: "account.mayestro",
    loadChildren: () =>
      import(`./account-mayestro/account-mayestro.module`).then(
        (m) => m.AccountMayestroModule
      ),
  },
  {
    path: "open.mayestro",
    loadChildren: () =>
      import(`./open-mayestro/open-mayestro.module`).then(
        (m) => m.OpenMayestroModule
      ),
  },
  {
    path: "download",
    loadChildren: () =>
      import(`./connect/connect.module`).then((m) => m.ConnectModule),
  },
  {
    path: "artist.management",
    loadChildren: () =>
      import(`./artist-management/artist-management.module`).then(
        (m) => m.ArtistManagementModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
