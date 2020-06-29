import { AboutArtistComponent } from "./about-artist/about-artist.component";
import { RelatedArtistsComponent } from "./related-artists/related-artists.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArtistComponent } from "./artist.component";
import { ArtistOverviewComponent } from "./artist-overview/artist-overview.component";
import { NotFoundComponent } from "src/app/shared/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: ArtistComponent, // base template component
    children: [
      { path: "", pathMatch: "full", redirectTo: "overview" },
      { path: "overview", component: ArtistOverviewComponent },
      { path: "related", component: RelatedArtistsComponent },
      { path: "about", component: AboutArtistComponent },
      { path: "**", component: NotFoundComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule {}
