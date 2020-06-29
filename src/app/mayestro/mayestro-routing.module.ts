import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MayestroComponent } from "./mayestro.component";
import { HomeComponent } from "./home/home.component";
import { PlayerComponent } from "./player/player.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { SeeAllComponent } from "./see-all/see-all.component";
import { SearchCardComponent } from "./search/search-card/search-card.component";
import { SearchComponent } from "./search/search.component";
import { PlaylistComponent } from "./playlist/playlist.component";
import { PlaylistsComponent } from "./playlists/playlists.component";
import { ArtistsComponent } from "./artists/artists.component";
import { AlbumsComponent } from "./albums/albums.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { from } from "rxjs";
import { NotFoundComponent } from "../shared/components/not-found/not-found.component";
import { LikedsongsComponent } from "../mayestro/likedsongs/likedsongs.component";
import { PlayingQueueComponent } from './playing-queue/playing-queue.component';
import { DownloadComponent } from './download/download.component';
const routes: Routes = [
  {
    path: "",
    component: MayestroComponent, // base template component
    children: [
      { path: "", pathMatch: "full", redirectTo: "home" },
      { path: "home", component: HomeComponent },
      { path: "player", component: PlayerComponent },
      { path: "side", component: SideBarComponent },
      { path: "seeall/:name", component: SeeAllComponent },
      { path: "search/seeall/:browse/:color/:name", component: SeeAllComponent },
      { path: "seeall/:browse/:name", component: SeeAllComponent },
      { path: "search", component: SearchComponent },
      { path: "playlist/:id/:type", component: PlaylistComponent },
      { path: "yourlibrary/playlists", component: PlaylistsComponent },
      { path: "yourlibrary/artist", component: ArtistsComponent },
      { path: "yourlibrary/album", component: AlbumsComponent },
      {path:"LikedSongs",component:LikedsongsComponent} ,
      {path: "queue",component: PlayingQueueComponent},
      {path: "download", component:DownloadComponent},
      {
        path: "artist/:id",
        loadChildren: () =>
          import(`./artist/artist.module`).then(m => m.ArtistModule)
      },
      { path: "profile/:id", component: UserProfileComponent },
      { path: "**", component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayestroRoutingModule {}
