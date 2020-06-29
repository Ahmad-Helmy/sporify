import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { HomeArtistCardComponent } from "../mayestro/home-artist-card/home-artist-card.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { LoadingComponent } from "./components/loading/loading.component";

@NgModule({
  declarations: [HomeArtistCardComponent, NotFoundComponent, LoadingComponent],
  providers: [],
  imports: [CommonModule, HttpClientModule],
  exports: [HomeArtistCardComponent, LoadingComponent],
})
export class SharedModule {}
