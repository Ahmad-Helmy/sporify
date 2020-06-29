import { ArtistService } from './../artist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MayestroService } from '../../mayestro.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-about-artist',
  templateUrl: './about-artist.component.html',
  styleUrls: ['./about-artist.component.css']
})

/**
 * about artist component
 */

export class AboutArtistComponent implements OnInit {

  /**
   * object to push artist info to it
   */
  artistInfo:any;
  /**
   * array of listners numbers and locations
   */
  listners:[];
  /**
   * artist id
   */
  id:any;
  constructor(private route:ActivatedRoute,private artist:ArtistService) { }

  /**
   * get artist info from the srver and pass it to artistInfo object
  */
  ngOnInit() {

    this.route.params.pipe(
      switchMap(param=>{
        this.id=param['id']
        return this.artist.getAboutArtist(this.id)
      })
      )
      .subscribe((comp:any)=>{
        this.artistInfo=comp.about;
        this.listners=comp.listners;
      });
  }

}
