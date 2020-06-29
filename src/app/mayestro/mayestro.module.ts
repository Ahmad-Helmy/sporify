import { HomeArtistCardComponent } from './home-artist-card/home-artist-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayestroRoutingModule } from './mayestro-routing.module';
import { MayestroComponent } from './mayestro.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PlayerComponent } from './player/player.component';
import { SharedModule } from '../shared/shared.module';
import {MatMenuModule} from '@angular/material/menu';
import { MiniCardViewerComponent } from './mini-card-viewer/mini-card-viewer.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { SeeAllComponent } from './see-all/see-all.component';
import { SearchCardComponent } from './search/search-card/search-card.component';
import { SearchComponent } from './search/search.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { TrackComponent } from './track/track.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import{ MatSliderModule,MatFormFieldModule,MatInputModule,MatIconModule,MatDialogModule, MatSnackBar, MatSnackBarModule} from '@angular/material';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DialogComponent } from './dialog/dialog.component';
import { fakeBackendProvider } from '../shared/mock-server/mock-server.service';
import { MayestroService } from './mayestro.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { LikedsongsComponent } from './likedsongs/likedsongs.component';
import { PlayingQueueComponent } from './playing-queue/playing-queue.component';
import { DownloadComponent } from './download/download.component';
import { TopResultComponent } from './search/top-result/top-result.component';
import { SongsComponent } from './search/songs/songs.component';
import { RecentSearchComponent } from './search/recent-search/recent-search.component';


@NgModule({
  declarations: [MayestroComponent, HeaderComponent, SideBarComponent, PlayerComponent, MiniCardViewerComponent, CardComponent, HomeComponent, SeeAllComponent, SearchCardComponent, SearchComponent, PlaylistComponent, TrackComponent,AlbumsComponent,ArtistsComponent,PlaylistsComponent,UserProfileComponent, DialogComponent,LikedsongsComponent,PlayingQueueComponent,DownloadComponent,TopResultComponent,SongsComponent,RecentSearchComponent],
  entryComponents:[DialogComponent],
  imports: [
    MatMenuModule,
    CommonModule,
    MayestroRoutingModule,
    SharedModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CardComponent
  ],
  providers:[fakeBackendProvider,MayestroService]
})
export class MayestroModule {}
