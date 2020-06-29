import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArtistManagementComponent } from "./artist-management.component";
import { HomeComponent } from "./home/home.component";
import { CreateSongComponent } from "./create-song/create-song.component";
import { CreateAlbumComponent } from "./create-album/create-album.component";

const routes: Routes = [
  {
    path: "",
    component: ArtistManagementComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "artist" },
      { path: "artist", component: HomeComponent },
      { path: "new-song", component: CreateSongComponent },
      { path: "new-album", component: CreateAlbumComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistManagementRoutingModule {}
