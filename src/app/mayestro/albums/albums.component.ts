import { Component, OnInit } from '@angular/core';
import { MayestroService } from '../mayestro.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  songs:any[];
  length:any;
  constructor(private service: MayestroService) { }

  
  
  ngOnInit() {
   /**
    * gets albums of library
    */
    this.service.GetLibraryAlbums()
      .subscribe(
        (data:any[]) =>{
          this.songs=data;
          this.length=this.songs.length;
          console.log(this.songs);
        }
      );
    
  }

}
