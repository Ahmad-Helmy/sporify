import { MayestroModule } from './../mayestro.module';
import { CardComponent } from './../card/card.component';
import { ArtistSongComponent } from './artist-song/artist-song.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistRoutingModule } from './artist-routing.module';
import { RelatedArtistsComponent } from './related-artists/related-artists.component';
import { AboutArtistComponent } from './about-artist/about-artist.component';
import { ArtistHeaderComponent } from 'src/app/mayestro/artist/artist-header/artist-header.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { ArtistOverviewComponent } from './artist-overview/artist-overview.component';
import { ArtistComponent } from './artist.component';



@NgModule({
  declarations: [RelatedArtistsComponent, AboutArtistComponent,ArtistSongComponent,ArtistHeaderComponent,ArtistCardComponent, ArtistOverviewComponent,ArtistComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    SharedModule,
    MayestroModule

  ]

})
export class ArtistModule { }
