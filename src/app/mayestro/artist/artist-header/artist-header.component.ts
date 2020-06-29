import { ArtistService } from './../artist.service';
import { Component, OnInit, Input,HostBinding  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, combineLatest } from 'rxjs/operators';
import { LikeAndFollowService } from '../../like-and-follow.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-artist-header',
  templateUrl: './artist-header.component.html',
  styleUrls: ['./artist-header.component.css']
})

/**
 * Artist Header component 
 */

export class ArtistHeaderComponent implements OnInit {
/**
 * boolean to check if the user follow this artist
 */
  isFollowed=true;
  isPalyed=true;
  /**
   * array of follwed artists
   */
  FollowedArtists:any[];
  artists:any;
  index:any;

/**
 * artistInfo object to contain artist information  
 */
  artistInfo={
    name:'',
    id:'',
    img:'',
    followers:'',
    imgUrl:''
  };
  id: any;
 
  constructor(private route:ActivatedRoute,private artist:ArtistService, private followartist:LikeAndFollowService,    private snackbar: MatSnackBar,) { }
  
  /**
   * get artist information from the server and pass it to the object 
   */

  ngOnInit() {

    this.route.params.pipe(
      switchMap(param=>{
        this.id=param['id']
        return this.artist.getArtist(this.id);
      })
      )
      .subscribe((comp:any)=>{
             
        this.artistInfo.id=comp.id;
        this.artistInfo.name=comp.name;
        this.artistInfo.img=comp.image;
        //this.isFollowed=comp.isFollowed; 
        this.artistInfo.imgUrl=comp.imgurl;
        this.artists=comp;
      });
      this.followartist.GetFollowedArtists()
      .subscribe((comp:any)=>{     
      this.FollowedArtists=comp;
      });
  }

  /**
   *  follow  artist and add it to library
   */

  follow()
  {
    if(this.isFollowed==true)
    {
       this.isFollowed=false;
            this.followartist.FollowArtist(this.id,'artist').subscribe(
        response => {
          this.FollowedArtists[0].artists.push(this.artists);
          this.FollowedArtists[0].artists[0].isFollowed=false;
          console.log(this.FollowedArtists);
        })
        let snack= this.snackbar.open("Added to Your Library" ,'',{duration:500})
    }
  }
  /**
   * unfollow artist and remove it from library
   */
unfollow()
{
   
     this.isFollowed=true;
     console.log(this.id);
    this.followartist.UnFollowArtist(this.id,'Artist').subscribe(
      response => {
        this.FollowedArtists[0].artists.splice(0, 1);
        console.log("UNFOLLOWED");
      })
      let snack= this.snackbar.open("Removed from Your Library" ,'',{duration:500})
}
  /**
   * change play button label 
   */

  pLay(){
    
    if(this.isPalyed==true)
       this.isPalyed=false;
    else this.isPalyed=true;
  }

}