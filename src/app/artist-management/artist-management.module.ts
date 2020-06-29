import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ArtistManagementRoutingModule } from "./artist-management-routing.module";
import { ArtistManagementComponent } from "./artist-management.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { CreateSongComponent } from "./create-song/create-song.component";
import { CreateAlbumComponent } from "./create-album/create-album.component";
import { ChartComponent } from "./chart/chart.component";
import { CardsContainerComponent } from "./cards-container/cards-container.component";
import { CardComponent } from "./card/card.component";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    ArtistManagementComponent,
    HeaderComponent,
    HomeComponent,
    CreateSongComponent,
    CreateAlbumComponent,
    ChartComponent,
    CardsContainerComponent,
    CardComponent,
  ],
  entryComponents: [ChartComponent],
  imports: [
    CommonModule,
    ArtistManagementRoutingModule,
    FormsModule,
    MatDialogModule,
  ],
})
export class ArtistManagementModule {}
