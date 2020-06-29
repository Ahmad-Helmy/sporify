import { ArtistService } from './../artist.service';
import { IASong } from './../artist-song/artist-song.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IACard } from '../artist-card/artist-card.interface';
import { switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { element } from 'protractor';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-artist-overview',
  templateUrl: './artist-overview.component.html',
  styleUrls: ['./artist-overview.component.css']
})

/**
 * Artist overview component
 */
export class ArtistOverviewComponent implements OnInit {
  /**
   * array of sonsgs of type ISong
   */
  songs:Array<IASong>=[];
  /**
   * array of albums of type IACard
   */
  albums:Array<IACard>=[];
   /**
   * array of more albums of type IACard
   */
  moreAlbums:Array<IACard>=[];
  /**
   * array of singles of type IACard
  */
  singles:Array<IACard>=[];
  /**
   * array of more singles of type IACard
  */
  moreSingles:Array<IACard>=[];
  /**
   * array of Appears on of type IACard
  */
  appearsOn:Array<IACard>=[];
  /**
   * array of more Appears on of type IACard
  */
  moreAppearsOn:Array<IACard>=[];
  /**
   * artist id
   */
  id:any;
  /**
   * albums show less button  
   */
  aShowLess=false;
  /**
   * singles show less button
   */
  sShowLess=false;
  /**
   * appears on show less button
   */
  apShowLess=false;
  /**
   * original albums array
   */
  orgAlbums:Array<IACard>=[];
  /**
   * original singles array
   */
  orgSingles:Array<IACard>=[];
  /**
   * original Appears on array
   */
  orgAppearsOn:Array<IACard>=[];
  /**
   *boolean if there is  albums more button
   */
  aShowMoreBtn=true;
  /**
   *  singles show more button
   */
  sShowMoreBtn=true;
  /**
   *appears on show more button
   */
  apShowMoreBtn=true;
  
  constructor(private route:ActivatedRoute,private artist:ArtistService,private playerservice:PlayerService) { }
 
  /**
   * get data(artist singles,songs,albums) from the server and push it to the arrays(singles,albums,songs)
   */
  ngOnInit() {
    
    this.route.params.pipe(
      switchMap(param=>{
        this.id=param['id']
        return combineLatest([
          this.artist.getArtistTopTracks(this.id),
          this.artist.getArtistAlbums(this.id),
          // this.artist.getMoreAlbums(this.id),
          this.artist.getArtistSingles(this.id),
          this.artist.getAppearsOn(this.id)
        ]); 
      })
      )
      .subscribe((comp:any)=>{
        
      
        comp[0].tracks.forEach((element:any) => {
          const song:IASong={
            name: element.name,
            duration:element.duration,
            image:element.image,
            isLiked:element.isLiked,
            id:element.id,
            url:element.url,
            artist:element.artist
            
          }
          this.songs.push(song);
          this.playerservice.songs=comp[0].tracks;
        });
        this.playerservice.name=this.playerservice.songs[0].name;
        this.playerservice.imageURL=this.playerservice.songs[0].image;
        this.playerservice.artist=this.playerservice.songs[0].artists[0].name;
        this.playerservice.x.src=this.playerservice.songs[0].url;
        this.playerservice.array=this.playerservice.songs.length;
        this.playerservice.checkindex=this.playerservice.playerindex;
        ////////////////
        console.log(comp[1])
        comp[1].albums.forEach((element:any) => {
          const album:IACard={
            name: element.name,
            duration:0,
            image:element.image,
            isLiked:false,
            id:element.id,
            totalTracks:element.totalTracks,
            type:"album"
          }
          this.albums.push(album);
          
        });
        this.orgAlbums=this.albums

        comp[2].tracks.forEach((element:any) => {
          const single:IACard={
            name: element.name,
            duration:element.duration,
            image:element.image,
            isLiked:element.isLiked,
            id:element.id,
            totalTracks:0,
            type:"album"
          }
          this.singles.push(single);
        });
        this.orgSingles=this.singles
        comp[3].albums.forEach((element:any) => {
          const appearOn:IACard={
            name: element.name,
            duration:element.duration,
            image:element.image,
            isLiked:element.isLiked,
            id:element.id,
            totalTracks:0,
            type:"album"
          }
          this.appearsOn.push(appearOn);
        });
        this.orgAppearsOn=this.appearsOn
      });
  }
  /**
   * send request to server to get more albms
   */
  albmsMoreFunc(){
  
    this.aShowMoreBtn=true;
    this.aShowLess=false;
    this.albums=this.orgAlbums
      
    this.artist.getMoreAlbums(this.id).subscribe((res:any)=>{      
        res.albums.forEach((element:any) => {
          const album:IACard={
            name: element.name,
            duration:0,
            image:element.image,
            isLiked:false,
            id:element.id,
            totalTracks:element.totalTracks,
            type:"album"
          }
          this.moreAlbums.push(album);
        });
        this.albums=this.albums.concat(this.moreAlbums)
      });
  }
  /**
   * send request to server to get more singles
   */
  singlesMoreFunc(){
  
    this.sShowMoreBtn=true;
    this.sShowLess=false;
    this.singles=this.orgSingles;
      
    this.artist.getMoreSingles(this.id).subscribe((res:any)=>{
      console.log(res)     
        res.tracks.forEach((element:any) => {
          const album:IACard={
            name: element.name,
            duration:0,
            image:element.image,
            isLiked:false,
            id:element.id,
            totalTracks:element.totalTracks,
            type:"album"
          }
          this.moreSingles.push(album);
        });
        this.singles=this.singles.concat(this.moreSingles)
      });
  }
  /**
   * send request to server to get more appears on
   */
  appearsMoreFunc(){
  
    this.apShowMoreBtn=true;
    this.apShowLess=false;
    this.appearsOn=this.orgAppearsOn
      
    this.artist.getMoreAppearsOn(this.id).subscribe((res:any)=>{      
        res.albums.forEach((element:any) => {
          const album:IACard={
            name: element.name,
            duration:0,
            image:element.image,
            isLiked:false,
            id:element.id,
            totalTracks:element.totalTracks,
            type:"album"
          }
          this.moreAppearsOn.push(album);
        });
        this.appearsOn=this.appearsOn.concat(this.moreAppearsOn)
      });
  }
  /**
   * show less albums 
   */
  albmusShowLessFunc(){
    this.moreAlbums=[];
    this.aShowLess=true;
    this.aShowMoreBtn=false;
  }
   /**
   * show less singles 
   */
  SinglesShowLessFunc(){
    this.moreSingles=[];
    this.sShowLess=true;
    this.sShowMoreBtn=false;  
  }
   /**
   * show less appears on 
   */
  appearsShowLessFunc(){
    this.moreAppearsOn=[];
    this.apShowLess=true;
    this.apShowMoreBtn=false;  
  }
  
}
