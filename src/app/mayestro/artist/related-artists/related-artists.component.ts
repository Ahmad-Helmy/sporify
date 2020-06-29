import { ArtistService } from './../artist.service';
import { ICard } from './../../card/card.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-related-artists',
  templateUrl: './related-artists.component.html',
  styleUrls: ['./related-artists.component.css']
})

/**
 * Related-artists component
 */

export class RelatedArtistsComponent implements OnInit {
 id:any;
 /**
  * Array of related-artists of type Icard
  */
 relatedArray:Array<ICard>=[];
  constructor(private route:ActivatedRoute,private artist:ArtistService) { }
/**
 * get related-artists from the server and push them to the array of related-artists
 */
  ngOnInit() {
    
    this.route.params.pipe(
      switchMap(param=>{
        this.id=param['id']
        return this.artist.getRelatedArtists(this.id)
       
      })
      )
      .subscribe((comp:any)=>{
        comp.artists.forEach((element:any) => {
          const card:ICard={
            name: element.name,
            description: "Artist",
            imgUrl:element.image,
            ID: element.id,
            type:element.type
          }
          this.relatedArray.push(card);
        });
      });

  }

}
