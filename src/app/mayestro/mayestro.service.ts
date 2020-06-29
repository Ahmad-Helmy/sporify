import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../shared/services/auth.service";
import { map } from "rxjs/operators/map";
import "rxjs";

@Injectable({
  providedIn: "root",
})
export class MayestroService {
  id: any;
  playlistimage: any;
  mayestrourl: any;
  mayestroname: any;
  mayestroartist: any;
  playlistbuttonpressed = false;
  songs: any[];
  constructor(private httpClient: HttpClient, private auth: AuthService) {}
  /**
   * gets an album
   * @param id  album id
   */
  getAlbum(id) {
    return this.httpClient.get(this.auth.URL + `/albums/${id}`);
  }
  /**
   * gets tacks of an album
   * @param id  album id
   */
  getTracks(id) {
    console.log("aaaa");
    return this.httpClient.get(this.auth.URL + `/albums/${id}/tracks`);
  }

  /**
   * gets a playlist
   * @param id  playlist id
   */
  getPlaylist(id) {
    return this.httpClient.get(this.auth.URL + `/playlist/${id}`);
  }

  /**
   * gets tacks of a playlist
   * @param id  playlist id
   */
  getPlaylistTracks(id) {
    return this.httpClient.get(this.auth.URL + `/playlist/${id}/tracks`);
  }

  /**
   * get home categories
   */
  getHome() {
    return this.httpClient.get(this.auth.URL + "/home");
  }
  /**
   * gets a category by its name
   * @param name category name
   */
  getSeeAll(name, limit, start) {
    return this.httpClient.get(
      this.auth.URL + `/home/'${name}'/${limit}/${start}`
    );
  }

  /**
   * snd requist with string to search with it
   * @param resp string to search
   */
  getSearch(resp) {
    return this.httpClient.get(this.auth.URL + "/search/" + resp);
  }

  /**
   * get browse cards
   */
  getBrowse() {
    return this.httpClient.get(this.auth.URL + "/search");
  }

  /**
   * get recent search
   */
  getRecentSearch() {
    return this.httpClient.get(this.auth.URL + "/recentSearch");
  }

  /**
   * gets user information by its id
   * @param id user id
   */
  getUser(id) {
    return this.httpClient.get(this.auth.URL + `/users/${id}`);
  }

  /**
   * get playlists of an user by its id
   * @param id user's id
   */
  getUserPLaylist(id) {
    return this.httpClient.get(this.auth.URL + `/users/${id}/playlists`);
  }
  /**
   * gets playlists made by user
   */
  getMyPlaylists() {
    return this.httpClient.get(this.auth.URL + "/me/playlists", {
      headers: { token: localStorage.getItem("token") },
    });
  }

  /**
   * get tracks from a playlist
   * @param id of the playlist
   */
  getMytracks(id) {
    return this.httpClient.get(this.auth.URL + `/me/playlists/${id}/tracks`, {
      headers: { token: localStorage.getItem("token") },
    });
  }
  /**
   * adds a song to a playlist
   * @param id of the song to be added to the playlist
   */
  putTrack(id: any) {
    return this.httpClient.put(this.auth.URL + "/me/tracks", id).pipe(
      map((res: any) => {
        localStorage.setItem("token", res.token);
      })
    );
  }
  /**
   * remove a song from a playlist
   * @param id  of the song to be removed from the playlist
   */
  deleteTrack(id: any) {
    return this.httpClient.delete(this.auth.URL + "/me/tracks", id).pipe(
      map((res: any) => {
        localStorage.setItem("token", res.token);
      })
    );
  }
  /**
   * gets playlist created by user
   * @param id of the playlist i created
   */
  getmyPlaylist(id) {
    return this.httpClient.get(this.auth.URL + `/me/playlists/${id}`, {
      headers: { token: localStorage.getItem("token") },
    });
  }
  /**
   * creates a playlist
   * @param name of playlist
   */
  createPlaylist(name) {
    let obj = { name };
    return this.httpClient.put(this.auth.URL + "/user/createPlaylist", obj, {
      headers: { token: localStorage.getItem("token") },
    });
  }
  /**
   * adds album to library
   * @param id of the album to be added in your library
   */
  AddAlbum(id) {
    let obj = { id };
    return this.httpClient.put(this.auth.URL + "/me/albums", obj, {
      headers: { token: localStorage.getItem("token") },
    });
  }
  /**
   * get library albums
   */
  GetLibraryAlbums() {
    console.log("here");
    return this.httpClient.get(this.auth.URL + "/me/albums", {
      headers: { token: localStorage.getItem("token") },
    });
  }
  /**
   * add playlist to library
   * @param id of playlist added to library
   */
  AddPlaylist(id) {
    let obj = { id };
    return this.httpClient.put(this.auth.URL + "/me/playlists", obj, {
      headers: { token: localStorage.getItem("token") },
    });
  }
  /**
   * delete playlist
   * @param id of playlist to be removed
   */
  RemovePlaylist(id) {
    return this.httpClient
      .delete(this.auth.URL + `/user/deletePlaylist/${id}`)
      .pipe(
        map((res: any) => {
          localStorage.setItem("token", res.token);
        })
      );
  }
}
