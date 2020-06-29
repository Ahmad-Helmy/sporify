import { Injectable } from "@angular/core";
import { AuthService } from "../shared/services/auth.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})

/**
 * artist management service
 */
export class ArtistManagementService {
  /**
   *
   * @param auth auth service to get URL
   * @param http http client
   */
  constructor(private auth: AuthService, private http: HttpClient) {}

  /**
   *
   * @param img img data from input
   * @param songId song id
   */
  uploadSongImg(img, songId) {
    const formData = new FormData();
    formData.append("image", img);
    formData.append("id", songId);
    return this.http.post(`${this.auth.URL}/artist/addSongImg`, formData);
  }
  /**
   *
   * @param data song data from input
   * @param songId song id
   */
  uploadSongData(data, songId) {
    const formData = new FormData();
    formData.append("song", data);
    formData.append("id", songId);
    return this.http.post(`${this.auth.URL}/artist/addSongData`, formData);
  }

  /**
   *
   * @param song song to post in srver
   */
  postSong(song) {
    return this.http.post(`${this.auth.URL}/artist/new-song`, song);
  }

  /**
   *
   * @param img img data to post in server
   * @param albumId album id
   */
  uploadAlbumImg(img, albumId) {
    const formData = new FormData();
    formData.append("image", img);
    formData.append("id", albumId);
    return this.http.post(`${this.auth.URL}/artist/addAlbumImg`, formData);
  }

  /**
   *
   * @param album album to post in server
   */
  postAlbum(album) {
    return this.http.post(`${this.auth.URL}/artist/new-album`, album);
  }

  /**
   * get artist songs from server
   */
  getArtistSongs() {
    return this.http.get(`${this.auth.URL}/artist/getSongs`);
  }

  /**
   * git artist basic info
   */
  getArtist() {
    return this.http.get(`${this.auth.URL}/artist`);
  }

  /**
   * get artist albums form server
   */
  getArtistAlbums() {
    return this.http.get(`${this.auth.URL}/artist/getAlbums`);
  }

  /**
   * git song charts per day , month and year
   * @param id song id
   */
  getArtistSongCharts(id) {
    return this.http.get(`${this.auth.URL}/artist/getSongCharts/${id}`);
  }

  /**
   * git album charts per day , month and year
   * @param id album id
   */
  getArtistAlbumCharts(id) {
    return this.http.get(`${this.auth.URL}/artist/getSongCharts/${id}`);
  }

  /**
   * edite song
   * @param newSong new song to edite
   */
  editeSong(newSong) {
    return this.http.put(`${this.auth.URL}/artist/editeSong`, newSong);
  }

  /**
   * edite album
   * @param newAlbum new album to edite
   */
  editeAlbum(newAlbum) {
    return this.http.put(`${this.auth.URL}/artist/editeAlbum`, newAlbum);
  }

  /**
   * delete song
   * @param id song id
   */
  deleteSong(id) {
    return this.http.delete(`${this.auth.URL}/artist/deleteSong/${id}`);
  }

  /**
   * delete album
   * @param id album id
   */
  deleteAlbum(id) {
    return this.http.delete(`${this.auth.URL}/artist/deleteAlbum/${id}`);
  }
}
