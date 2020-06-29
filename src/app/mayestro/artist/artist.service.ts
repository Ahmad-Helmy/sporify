import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.service';

/**
 * artist service decorator
 */
@Injectable({
  providedIn: 'root'
})

/**
 * view artist service to handle all module requests
 */
export class ArtistService {
  
  /**
   * 
   * @param httpClient httpClient to send requests
   * @param auth authentication service
   */
  constructor(private httpClient: HttpClient, private auth:AuthService) { }
  /**
   * getArtist method get the artist from server  by its id
   * @param id artist id
   */
  getArtist(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}`);
  }

   /**
   *get about artist from server  by artist id
   * @param id artist id
   */
  getAboutArtist(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/about`);
  }
  
   /**
   *get artist's top traks from server by artist id
   * @param id artist id
   */
  getArtistTopTracks(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/top-tracks`)
  }

  /**
  *get artist's albums from server by artist id
  * @param id artist id
  */
  getArtistAlbums(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/albums`)
  }
  
   /**
   *get artist's more albums from server by artist id
   * @param id artist id
   */
  getMoreAlbums(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/more-albums`)
  }

  /**
   *get artist's singls from server by artist id
   * @param id artist id
   */
  getArtistSingles(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/singles`)
  }
    
   /**
   *get artist's more singles from server by artist id
   * @param id artist id
   */
  getMoreSingles(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/more-singles`)
  }

  /**
   *get artist's appears on from server by artist id
   * @param id artist id
   */
  
  getAppearsOn(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/appears-on`)
  }

   /**
   *get artist's more appears on from server by artist id
   * @param id artist id
   */
  getMoreAppearsOn(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/more-appears-on`)
  }
  /**
   *get related artists from server by artist id
   * @param id artist id
   */
  getRelatedArtists(id){
    return this.httpClient.get(this.auth.URL+`/artists/${id}/related-artists`)
  }

}
