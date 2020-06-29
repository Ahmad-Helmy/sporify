import { Injectable } from "@angular/core";
import { JwtHelper } from "angular2-jwt";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { Observable, of, throwError, from, concat } from "rxjs";
import {
  delay,
  mergeMap,
  materialize,
  dematerialize,
  map,
} from "rxjs/operators";
import { stringify } from "querystring";
import { getInterpolationArgsLength } from "@angular/compiler/src/render3/view/util";

@Injectable()
export class MockServerService implements HttpInterceptor {
  users: any;
  hashId = [];
  albums: any;
  homePlaylists: any;
  mytracks: any;
  categories: any;
  myPlaylists: any;
  Liked: any;
  libraryAlbums = [];
  FollowedArtists: any;
  artistManagment: any;
  constructor() {
    this.artistManagment = {
      artists: [
        {
          name: "Amr Diab",
          imgUrl:
            "https://www.shorouknews.com/uploadedimages/Sections/ART/original/amrdianinblack.jpg",
          coverUrl: "https://i.ytimg.com/vi/n_3d1ApZRIU/maxresdefault.jpg",
          songs: [
            {
              imgUrl:
                "https://static01.nyt.com/images/2020/03/19/smarter-living/00well-handwashing-psa-music-notes/00well-handwashing-psa-music-notes-articleLarge-v3.gif?quality=90&auto=webp",
              _id: "asdasd",
              name: "test song1",
              description: "test test test test test test test ",
              likes: 200,
              listeners: 1000,
            },
            {
              imgUrl:
                "https://static01.nyt.com/images/2020/03/19/smarter-living/00well-handwashing-psa-music-notes/00well-handwashing-psa-music-notes-articleLarge-v3.gif?quality=90&auto=webp",
              _id: "asdasdsad",
              name: "test song2",
              description: "test test test test test test test ",
              likes: 45,
              listeners: 599,
            },
            {
              imgUrl:
                "https://static01.nyt.com/images/2020/03/19/smarter-living/00well-handwashing-psa-music-notes/00well-handwashing-psa-music-notes-articleLarge-v3.gif?quality=90&auto=webp",
              _id: "asdasdsafcz",
              name: "test song3",
              description: "test test test test test test test ",
              likes: 30,
              listeners: 6543,
            },
            {
              imgUrl:
                "https://static01.nyt.com/images/2020/03/19/smarter-living/00well-handwashing-psa-music-notes/00well-handwashing-psa-music-notes-articleLarge-v3.gif?quality=90&auto=webp",
              _id: "asdasasdasdasdas",
              name: "test song4",
              description: "test test test test test test test ",
              likes: 30,
              listeners: 6543,
            },
            {
              imgUrl:
                "https://static01.nyt.com/images/2020/03/19/smarter-living/00well-handwashing-psa-music-notes/00well-handwashing-psa-music-notes-articleLarge-v3.gif?quality=90&auto=webp",
              _id: "asdasasdaasdsdasdas",
              name: "test song5",
              description: "test test test test test test test ",
              likes: 30,
              listeners: 6543,
            },
            {
              imgUrl:
                "https://static01.nyt.com/images/2020/03/19/smarter-living/00well-handwashing-psa-music-notes/00well-handwashing-psa-music-notes-articleLarge-v3.gif?quality=90&auto=webp",
              _id: "asdasasdasdasdasdas",
              name: "test song6",
              description: "test test test test test test test ",
              likes: 30,
              listeners: 6543,
            },
          ],
          albums: [
            {
              imgUrl:
                "https://static01.nyt.com/images/2020/03/19/smarter-living/00well-handwashing-psa-music-notes/00well-handwashing-psa-music-notes-articleLarge-v3.gif?quality=90&auto=webp",
              _id: "asdasdasfldsj",
              name: "test Album1",
              description: "test test test test test test test ",
              likes: 34,
              listeners: 243,
              songs: [
                { name: "test1", id: "adasdas" },
                { name: "test2", id: "adasdasdsf" },
              ],
            },
            {
              imgUrl:
                "https://static01.nyt.com/images/2020/03/19/smarter-living/00well-handwashing-psa-music-notes/00well-handwashing-psa-music-notes-articleLarge-v3.gif?quality=90&auto=webp",
              _id: "asdasdaslkfjskd",
              name: "test Album2",
              description: "test test test test test test test ",
              likes: 72,
              listeners: 30000,
              songs: [
                { name: "test1", id: "adasdas" },
                { name: "test2", id: "adasdasdasdsf" },
              ],
            },
            {
              imgUrl:
                "https://static01.nyt.com/images/2020/03/19/smarter-living/00well-handwashing-psa-music-notes/00well-handwashing-psa-music-notes-articleLarge-v3.gif?quality=90&auto=webp",
              _id: "asdasdaslkskdjncz",
              name: "test Album3",
              description: "test test test test test test test ",
              likes: 100,
              listeners: 10000,
              songs: [
                { name: "test1", id: "adasdas" },
                { name: "test2", id: "adasdasdsfads" },
              ],
            },
          ],
        },
      ],
    };
    this.categories = {
      Home: [
        {
          playlists: [
            {
              type: "playlist",
              description: "Some Comfort Tracks to relax",
              id: "4qrimFUz8KFC8W6WrDiDnz",
              image:
                "https://i.scdn.co/image/ab67706f00000002a86f06fb337166fc5047efee",
              name: "Collection",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "Fayrouz",
                },
              ],
              tracks: [
                {
                  name: "Allamooni",
                  trackNumber: 1,
                  id: 1,
                  duration: "3.15",
                  url:
                    "http://www.arabicsheetmusic.com/Added%20Music%20Notations/Feirouz-1/allamooni.mp3",
                  artists: [
                    {
                      name: "Fayrouz",
                    },
                  ],
                },
                {
                  name: "AlaJisrAllawziyi",
                  trackNumber: 2,
                  id: 2,
                  duration: 3.26,
                  url:
                    "http://www.arabicsheetmusic.com/Added%20Music%20Notations/Feirouz-2/ala_jisr_allawziyi.mp3",
                  artists: [
                    {
                      name: "Fayrouz",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "Relax your Mind",
              id: "4qrimFUz8KFC8W6WrDiDn0",
              image:
                "https://i.scdn.co/image/ab67616d00001e029df54b112dfa5da467239db0",
              name: "Relaxtion",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "sara",
                },
              ],
              tracks: [
                {
                  name: "KolMara",
                  trackNumber: 1,
                  id: 1,
                  duration: 3.15,
                  url:
                    "http://www.arabicsheetmusic.com/Added%20Music%20Notations/Feirouz-1/allamooni.mp3",
                  artists: [
                    {
                      name: "tamer hosny",
                    },
                  ],
                },
                {
                  name: "Law",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  url:
                    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
                  artists: [
                    {
                      name: "elissa",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "get a Peacful Mind with our playlist",
              id: "4qrimFUz8KFC8W6WrDiDn1",
              image:
                "https://i.scdn.co/image/ab67616d0000b273c7cd431638fcd90523df85c3",
              name: "Peacful Mind",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "omar",
                },
              ],
              tracks: [
                {
                  name: "Allamooni",
                  trackNumber: 1,
                  id: 1,
                  duration: "3.15",
                  url:
                    "http://www.arabicsheetmusic.com/Added%20Music%20Notations/Feirouz-1/allamooni.mp3",
                  artists: [
                    {
                      name: "Fayrouz",
                    },
                  ],
                },
                {
                  name: "AlaJisrAllawziyi",
                  trackNumber: 2,
                  id: 2,
                  duration: 3.26,
                  url:
                    "http://www.arabicsheetmusic.com/Added%20Music%20Notations/Feirouz-2/ala_jisr_allawziyi.mp3",
                  artists: [
                    {
                      name: "Fayrouz",
                    },
                  ],
                },
                {
                  name: "shady",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  url:
                    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
                  artists: [
                    {
                      name: "fayrouz",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  url:
                    "http://www.arabicsheetmusic.com/Added%20Music%20Notations/Feirouz-1/allamooni.mp3",
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "SabahWeMasa",
                  trackNumber: 1,
                  id: 3,
                  duration: 2,
                  url:
                    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
                  artists: [
                    {
                      name: "fayrouz",
                    },
                  ],
                },
                {
                  name: "IWillAlwaysLoveYou",
                  trackNumber: 2,
                  id: 4,
                  duration: 2,
                  url:
                    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
                  artists: [
                    {
                      name: "whitney huston",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "Take A Rest",
              id: "4qrimFUz8KFC8W6WrDiDn2",
              image:
                "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
              name: "Divide",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "Ed Sheeran",
                },
              ],
              tracks: [
                {
                  name: "Perfect",
                  trackNumber: 1,
                  id: 1,
                  duration: "4.39",
                  url:
                    "https://ia801009.us.archive.org/8/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3",
                  artists: [
                    {
                      name: "Ed Sheeran",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  url:
                    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "Make a good and Sweet Moments",
              id: "4qrimFUz8KFC8W6WrDiDng",
              image:
                "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
              name: "Sweet Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "Good hours to spend with music",
              id: "4qrimFUz8KFC8W6WrDiDnh",
              image:
                "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
              name: "Sweet Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "Time to chill out with perfect songs",
              id: "4qrimFUz8KFC8W6WrDiDni",
              image:
                "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
              name: "chill songs",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "get yourself some energy",
              id: "4qrimFUz8KFC8W6WrDiDnj",
              image:
                "https://i.scdn.co/image/ab67616d00001e0284c0ae5b34bc3fe4238c3bdd",
              name: "Energy",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "get yourself some energy",
              id: "4qrimFUz8KFC8W6WrDiDnh",
              image:
                "https://i.scdn.co/image/ab67616d00001e023b52eca47232bedfbb5e9443",
              name: "Energy",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
            {
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
            },
          ],
          name: "Chill",
        },
        {
          playlists: [
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "get yourself some energy",
              id: "4qrimFUz8KFC8W6WrDiDnj",
              image:
                "https://i.scdn.co/image/ab67616d00001e0284c0ae5b34bc3fe4238c3bdd",
              name: "Energy",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "Time to chill out with perfect songs",
              id: "4qrimFUz8KFC8W6WrDiDni",
              image:
                "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
              name: "chill songs",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "May be Happy now",
              id: "4qrimFUz8KFC8W6WrDiDmf",
              image:
                "https://i.scdn.co/image/ab67616d00001e0205559264ebef3889709826cf",
              name: "HAPPY PERSON",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "do some excerise",
              id: "4qrimFUz8KFC8W6WrDiDme",
              image:
                "https://i.scdn.co/image/ab67616d00001e0241e9614560815b11c1ca543d",
              name: "Sport Music",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "New Songs Mood Adjust ",
              id: "4qrimFUz8KFC8W6WrDiDmb",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Keep Up",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description:
                "playlist from the including all songs in if i stay movie",
              id: "4qrimQUz8KFC8W6WrDiDnc",
              image:
                "https://i.scdn.co/image/ab67616d0000b273c7cd431638fcd90523df85c3",
              name: "If i stay(soundtrack)",
            },
          ],
          name: "WorkOut",
        },
        {
          playlists: [
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "New Songs Mood Adjust ",
              id: "4qrimFUz8KFC8W6WrDiDmb",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Keep Up",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "do some excerise",
              id: "4qrimFUz8KFC8W6WrDiDme",
              image:
                "https://i.scdn.co/image/ab67616d00001e0241e9614560815b11c1ca543d",
              name: "Sport Music",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "get yourself some energy",
              id: "4qrimFUz8KFC8W6WrDiDnj",
              image:
                "https://i.scdn.co/image/ab67616d00001e0284c0ae5b34bc3fe4238c3bdd",
              name: "Energy",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "Some Comfort Tracks to relax",
              id: "4qrimFUz8KFC8W6WrDiDnd",
              image:
                "https://i.scdn.co/image/ab67706f00000002a86f06fb337166fc5047efee",
              name: "Comfort Zone",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "playlist Exclusive Amr Diab",
              id: "4qrimFUz8KFC8W6WrDiDnc",
              image:
                "https://i.scdn.co/image/ab67616d0000b273c7cd431638fcd90523df85c3",
              name: "New Songs Amr Diab",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "Relax your Mind",
              id: "4qrimFUz8KFC8W6WrDiDne",
              image:
                "https://i.scdn.co/image/ab67616d00001e029df54b112dfa5da467239db0",
              name: "Relaxtion",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "get yourself some energy",
              id: "4qrimFUz8KFC8W6WrDiDnh",
              image:
                "https://i.scdn.co/image/ab67616d00001e023b52eca47232bedfbb5e9443",
              name: "Energy",
            },
          ],
          name: "Happy",
        },
        {
          playlists: [
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "get a Peacful Mind with our playlist",
              id: "4qrimFUz8KFC8W6WrDiDnf",
              image:
                "https://i.scdn.co/image/ab67616d0000b273c7cd431638fcd90523df85c3",
              name: "Peacful Mind",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "May be Happy now",
              id: "4qrimFUz8KFC8W6WrDiDmf",
              image:
                "https://i.scdn.co/image/ab67616d00001e0205559264ebef3889709826cf",
              name: "HAPPY PERSON",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "New Songs Exclusive Happy and chill",
              id: "4qrimFUz8KFC8W6WrDiDma",
              image:
                "https://i.scdn.co/image/ab67616d00001e0225ba01b18a41bcc562209e42",
              name: "Moments",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "do some excerise",
              id: "4qrimFUz8KFC8W6WrDiDme",
              image:
                "https://i.scdn.co/image/ab67616d00001e0241e9614560815b11c1ca543d",
              name: "Sport Music",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "Take A Rest",
              id: "4qrimFUz8KFC8W6WrDiDnf",
              image:
                "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
              name: "Rest",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              owner: [
                {
                  name: "me",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              type: "playlist",
              description: "get yourself some energy",
              id: "4qrimFUz8KFC8W6WrDiDnh",
              image:
                "https://i.scdn.co/image/ab67616d00001e023b52eca47232bedfbb5e9443",
              name: "Energy",
            },
          ],
          description: "Most popular around world",
          name: "Most Popular Playlists",
        },
        {
          albums: [
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              tracks: [
                {
                  name: "thousand years",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "Christina Perri",
                    },
                  ],
                },
                {
                  name: "jar of hearts",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "Christina Perri",
                    },
                  ],
                },
              ],
              artists: [
                {
                  id: "7H55rcKCfwqkyDFH9wpKM6",
                  name: "Christina Perri",
                },
              ],
              type: "album",
              id: "3xl0OvcSlc9Mwe5ToaFtD3",
              image:
                "https://i.scdn.co/image/ab67616d00001e02d32c61683be0aed19bafcf99",
              name: "songs for carmella: lullabies & sing-a-longs",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              artists: [
                {
                  id: "3xl0OvcSlc9Mwe5ToaFtD3",
                  name: "Amr Diab",
                },
              ],
              type: "album",
              id: "3xl0OvcSlc9Mwe5ToaFtD23",
              image:
                "https://i.scdn.co/image/ab67616d0000b273abf13a20e745572fc39f939b",
              name: "Sahran",
            },
            {
              totalTracks: 2,
              releaseDate:
                "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
              artist: [
                {
                  name: "amrdiab",
                },
              ],
              tracks: [
                {
                  name: "amarain",
                  trackNumber: 1,
                  id: 1,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
                {
                  name: "sahran",
                  trackNumber: 2,
                  id: 2,
                  duration: 2,
                  artists: [
                    {
                      name: "amrdiab",
                    },
                  ],
                },
              ],
              artists: [
                {
                  id: "04gDigrS5kc9YWfZHwBETP",
                  name: "Marron 5",
                },
              ],
              type: "album",
              id: "75iQSBSaztFIAun9qLLCnb",
              image:
                "https://i.scdn.co/image/ab67616d00001e0234ce9a9dde9c057225509276",
              name: "Girls Like You (feat. Cardi B)",
            },
          ],
          description: "Newest Albums Released with your artits",
          name: "Released Albums",
        },
        {
          artists: [
            {
              type: "artist",
              id: "3xl0OvcSlc9Mwe5ToaFtD3",
              image:
                "https://i.scdn.co/image/ab67616d0000b273abf13a20e745572fc39f939b",
              name: "Amr Diab",
            },
            {
              type: "artist",
              id: "75iQSBSaztFIAun9qLLCnb",
              image:
                "https://i.scdn.co/image/ab67616d0000b2732b737b0411be58583293e17e",
              name: "Tamer Hosni",
            },
          ],
          description: "Artists",
          name: "popular Artists",
        },
      ],
    };
    this.users = [
      {
        _id: "1234567890",
        email: "ahmed@gmail.com",
        password: "12345678",
        name: "Ahmed Helmy",
        gender: "male",
        birthDate:
          "Wed Feb 01 1999 00:00:00 GMT+0200 (Eastern European Standard Time)",
        image:
          "https://i.scdn.co/image/ab67616d0000b2738b989426c336c1d1cf89502a",
        country: "Egypt",
      },
    ];
    this.myPlaylists = [
      {
        type: "myplaylist",
        description: "Some Comfort Tracks to relax",
        id: "2qrimFUz8KFC8W6WrDiDnd",
        image:
          "https://i.scdn.co/image/ab67706f00000002a86f06fb337166fc5047efee",
        name: "Comfort Zone",
        totalTracks: 2,
        releaseDate:
          "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
        owner: [
          {
            name: "me",
          },
        ],
        tracks: [
          {
            name: "Hawy",
            trackNumber: 1,
            id: 1,
            duration: 2,
            url:
              "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
            artists: [
              {
                name: "MassarEgbary",
              },
            ],
          },
          {
            name: "Liar",
            trackNumber: 2,
            id: 2,
            duration: 2,
            url:
              "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
            artists: [
              {
                name: "CamilaCabello",
              },
            ],
          },
        ],
      },
      {
        type: "myplaylist",
        description: "Relax your Mind",
        id: "2qrimFUz8KFC8W6WrDiDne",
        image:
          "https://i.scdn.co/image/ab67616d00001e029df54b112dfa5da467239db0",
        name: "Relaxtion",
        totalTracks: 2,
        releaseDate:
          "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
        owner: [
          {
            name: "me",
          },
        ],
        tracks: [
          {
            name: "Stitches",
            trackNumber: 1,
            id: 1,
            duration: 2,
            artists: [
              {
                name: "ShawnMendes",
              },
            ],
          },
          {
            name: "Fire on fire",
            trackNumber: 2,
            id: 2,
            duration: 2,
            artists: [
              {
                name: "SamSmith",
              },
            ],
          },
        ],
      },
    ];
    this.homePlaylists = [
      {
        type: "playlist",
        description: "Some Comfort Tracks to relax",
        id: "4qrimFUz8KFC8W6WrDiDnz",
        image:
          "https://i.scdn.co/image/ab67706f00000002a86f06fb337166fc5047efee",
        name: "Comfort Zone",
        totalTracks: 2,
        releaseDate:
          "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
        owner: [
          {
            name: "someone",
          },
        ],
        tracks: [
          {
            name: "helm omry",
            trackNumber: 1,
            id: 1,
            duration: 2,
            artists: [
              {
                name: "khaled selim",
              },
            ],
          },
          {
            name: "sahran",
            trackNumber: 2,
            id: 2,
            duration: 2,
            artists: [
              {
                name: "amrdiab",
              },
            ],
          },
        ],
      },
      {
        type: "playlist",
        description: "Relax your Mind",
        id: "4qrimFUz8KFC8W6WrDiDn0",
        image:
          "https://i.scdn.co/image/ab67616d00001e029df54b112dfa5da467239db0",
        name: "Relaxtion",
        totalTracks: 2,
        releaseDate:
          "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
        owner: [
          {
            name: "sara",
          },
        ],
        tracks: [
          {
            name: "kol mara",
            trackNumber: 1,
            id: 1,
            duration: 2,
            artists: [
              {
                name: "tamer hosny",
              },
            ],
          },
          {
            name: "law",
            trackNumber: 2,
            id: 2,
            duration: 2,
            artists: [
              {
                name: "elissa",
              },
            ],
          },
        ],
      },
      {
        type: "playlist",
        description: "get a Peacful Mind with our playlist",
        id: "4qrimFUz8KFC8W6WrDiDn1",
        image:
          "https://i.scdn.co/image/ab67616d0000b273c7cd431638fcd90523df85c3",
        name: "Peacful Mind",
        totalTracks: 2,
        releaseDate:
          "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
        owner: [
          {
            name: "omar",
          },
        ],
        tracks: [
          {
            name: "shady",
            trackNumber: 1,
            id: 1,
            duration: 2,
            artists: [
              {
                name: "fayrouz",
              },
            ],
          },
          {
            name: "sahran",
            trackNumber: 2,
            id: 2,
            duration: 2,
            artists: [
              {
                name: "amrdiab",
              },
            ],
          },
          {
            name: "sabah w masa",
            trackNumber: 1,
            id: 1,
            duration: 2,
            artists: [
              {
                name: "fayrouz",
              },
            ],
          },
          {
            name: "i will always love you",
            trackNumber: 2,
            id: 2,
            duration: 2,
            artists: [
              {
                name: "whitney huston",
              },
            ],
          },
        ],
      },
      {
        type: "playlist",
        description: "Take A Rest",
        id: "4qrimFUz8KFC8W6WrDiDn2",
        image:
          "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
        name: "Rest",
        totalTracks: 2,
        releaseDate:
          "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
        owner: [
          {
            name: "shady",
          },
        ],
        tracks: [
          {
            name: "shady",
            trackNumber: 1,
            id: 1,
            duration: 2,
            artists: [
              {
                name: "fayrouz",
              },
            ],
          },
          {
            name: "sahran",
            trackNumber: 2,
            id: 2,
            duration: 2,
            artists: [
              {
                name: "amrdiab",
              },
            ],
          },
        ],
      },
      {
        type: "playlist",
        description: "Make a good and Sweet Moments",
        id: "4qrimFUz8KFC8W6WrDiDng",
        image:
          "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
        name: "Sweet Moments",
        totalTracks: 2,
        releaseDate:
          "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
        owner: [
          {
            name: "me",
          },
        ],
        tracks: [
          {
            name: "amarain",
            trackNumber: 1,
            id: 1,
            duration: 2,
            artists: [
              {
                name: "amrdiab",
              },
            ],
          },
          {
            name: "sahran",
            trackNumber: 2,
            id: 2,
            duration: 2,
            artists: [
              {
                name: "amrdiab",
              },
            ],
          },
        ],
      },
      {
        type: "playlist",
        description: "Good hours to spend with music",
        id: "4qrimFUz8KFC8W6WrDiDnh",
        image:
          "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
        name: "Sweet Moments",
        totalTracks: 2,
        releaseDate:
          "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
        owner: [
          {
            name: "me",
          },
        ],
        tracks: [
          {
            name: "amarain",
            trackNumber: 1,
            id: 1,
            duration: 2,
            artists: [
              {
                name: "amrdiab",
              },
            ],
          },
          {
            name: "sahran",
            trackNumber: 2,
            id: 2,
            duration: 2,
            artists: [
              {
                name: "amrdiab",
              },
            ],
          },
        ],
      },
    ];
    this.FollowedArtists = [
      {
        artists: [],
      },
    ];
    this.Liked = [
      {
        tracks: [
          {
            name: "Allamooni",
            trackNumber: 11,
            id: 1,
            duration: 3.15,
            url:
              "http://www.arabicsheetmusic.com/Added%20Music%20Notations/Feirouz-1/allamooni.mp3",
            artists: [
              {
                name: "Fayrouz",
              },
            ],
          },
          {
            name: "AlaJisrAllawziyi",
            trackNumber: 12,
            id: 2,
            duration: 3.26,
            url:
              "http://www.arabicsheetmusic.com/Added%20Music%20Notations/Feirouz-2/ala_jisr_allawziyi.mp3",
            artists: [
              {
                name: "Fayrouz",
              },
            ],
          },
        ],
      },
    ];
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let users = this.users;
    let hashId = this.hashId;
    let albums = this.albums;
    let playlists = this.homePlaylists;
    let categories = this.categories;
    let artistManagment = this.artistManagment;
    let myPlaylists = this.myPlaylists;
    let LikedSongs = this.Liked;
    let libraryAlbums = this.libraryAlbums;
    let FollowedArtists = this.FollowedArtists;
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith("/user/login") && method === "POST":
          return login();
        case url.endsWith("/artist/addSongImg") && method === "POST":
          return addSongImg();
        case url.endsWith("/artist/getSongs") && method === "GET":
          return getArtistSongs();
        case url.endsWith("/artist") && method === "GET":
          return getArtist();
        case url.endsWith("/artist/getAlbums") && method === "GET":
          return getArtistAlbums();
        case url.endsWith("/artist/editeSong") && method === "PUT":
          return editeArtistSong();
        case url.endsWith("/artist/editeAlbum") && method === "PUT":
          return editeArtistAlbum();
        case url.match(/\/artist\/getSongCharts\/\S+$/) && method == "GET":
          return getCharts();
        case url.match(/\/artist\/getAlbumCharts\/\S+$/) && method == "GET":
          return getCharts();
        case url.match(/\/artist\/deleteSong\/\S+$/) && method == "DELETE":
          return deleteSong();
        case url.match(/\/artist\/deleteAlbum\/\S+$/) && method == "DELETE":
          return deleteAlbum();
        case url.endsWith("/artist/addSongData") && method === "POST":
          return addSongData();
        case url.endsWith("/artist/new-song") && method === "POST":
          return newSong();
        case url.endsWith("/artist/addAlbumImg") && method === "POST":
          return addAlbumImg();
        case url.endsWith("/artist/new-album") && method === "POST":
          return newAlbum();
        case url.endsWith("/user/signup") && method === "POST":
          return signup();
        case url.endsWith("/home") && method === "GET":
          return home();
        case url.match(/\/home\/[\S\s]+$/) && method === "GET":
          return seeAll();
        case url.endsWith("/search") && method == "GET":
          return browse();
        case url.endsWith("/recentSearch") && method == "GET":
          return recentSearch();
        case url.match(/\/search\/\S+$/) && method == "GET":
          return search();
        case url.match(
          /\/user\/mailExist\/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        ) && method === "GET":
          return checkEmail();
        case url.match(
          /\/user\/forgetPassword\/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        ) && method === "GET":
          return forgetPassword();
        case url.match(/\/albums\/\S+\/tracks$/) && method === "GET":
          return viewalbumtracks();
        case url.match(/\/albums\/\S+$/) && method === "GET":
          return viewalbum();
        case url.match(/\/playlist\/\S+\/tracks$/) && method === "GET":
          return viewplaylisttracks();
        case url.match(/\/me\/playlists\/\S+\/tracks$/) && method === "GET":
          return viewmytracks();
        case url.match(/\/playlist\/\S+$/) && method === "GET":
          return viewplaylist();
        case url.match(/\/me\/playlists\/\S+$/) && method === "GET":
          return viewmyplaylist();
        case url.match("/me/tracks") && method === "DELETE":
          return removetrack();
        case url.endsWith("/me/tracks") && method === "PUT":
          return addtrack();
        case url.endsWith("/me/albums") && method === "PUT":
          return addalbum();
        case url.endsWith("/me/albums") && method === "GET":
          return getLibraryAlbums();
        case url.endsWith("/me/playlists") && method === "GET":
          return viewmyplaylists();
        case url.endsWith("/user/createPlaylist") && method === "PUT":
          return createplaylist();
        case url.endsWith("/me/playlist") && method === "GET":
          return viewHomePlaylists();
        case url.endsWith("/me/playlists") && method === "PUT":
          return addPlaylist();
        case url.match(/\/user\/deletePlaylist\/\S+$/) && method === "DELETE":
          return removeplaylist();
        case url.endsWith("/user/profile") && method === "GET":
          return viewuser();
        case url.endsWith("/user/editprofile") && method === "PUT":
          return edituser();
        case url.match(/\/user\/resetPassword\?id=\S+$/) && method === "POST":
          return resetPassword();
        case url.endsWith("/user/changePassword") && method == "POST":
          return changePassword();
        case url.endsWith("/me/tracks") && method === "PUT":
          return LikeSongs();
        case url.endsWith("/me/tracks") && method === "GET":
          return getLikedSongs();
        case url.endsWith("me/tracks") && method === "DELETE":
          return UnLikeSongs();
        case url.endsWith("/follow") && method === "PUT":
          return FollowArtist();
        case url.match(/\/artists\/\S+\/about$/) && method === "GET":
          return viewaboutartist();
        case url.match(/\/artists\/\S+\/top-tracks$/) && method === "GET":
          return artisttop();
        case url.match(/\/artists\/\S+\/albums$/) && method === "GET":
          return artistAlbums();
        case url.match(/\/artists\/\S+\/more-albums$/) && method === "GET":
          return moreArtistAlbums();
        case url.match(/\/artists\/\S+\/singles$/) && method === "GET":
          return artistSingles();
        case url.match(/\/artists\/\S+\/more-singles$/) && method === "GET":
          return artistMoreSingles();
        case url.match(/\/artists\/\S+\/appears-on$/) && method === "GET":
          return artistAppearson();
        case url.match(/\/artists\/\S+\/more-appears-on$/) && method === "GET":
          return artistMoreAppearson();
        case url.match(/\/artists\/\S+\/related-artists$/) && method === "GET":
          return relatedartists();
        case url.match(/\/artists\/\S+$/) && method === "GET":
          return viewartist();
        case url.match(/\/users\/\S+\/playlists$/) && method === "GET":
          return getUserPLaylist();
        case url.match(/\/users\/\S+$/) && method === "GET":
          return getUser();
        // case url.match(/\/albums\/\S+\/tracks$/) && method === "GET":
        case url.match(/\/playlist\/\S+\/tracks$/) && method === "GET":
          return viewtracks();
        case url.match(/\/playlist\/\S+$/) && method === "GET":
          return viewplaylist();
        case url.endsWith("/user/profile") && method === "GET":
          return viewuser();
        case url.endsWith("/user/editprofile") && method === "PUT":
          return edituser();
        case url.match(/\/user\/resetPassword\?id=\S+$/) && method === "POST":
          return resetPassword();
        case url.endsWith("/user/changePassword") && method == "POST":
          return changePassword();
        case url.endsWith("/user/premium") && method === "POST":
          return toBePremium();
        case url.endsWith("/me/artists") && method === "GET":
          return GetFollowedArtists();
        case url.match(/\/unfollow\/\S+$/) && method === "DELETE":
          return UnFollowArtist();
      }
    }

    function addSongImg() {
      return ok({ message: "song img success" });
    }

    function addSongData() {
      return ok({ message: "song data success" });
    }

    function createplaylist() {
      const { name } = body;
      const _id = Math.floor(Math.random() * 100000);
      JSON.stringify(_id);
      const type = "myplaylist";
      let list = {
        type: "myplaylist",
        id: "1sdgiwgdkfcjab",
        image:
          "https://us.123rf.com/450wm/soloviivka/soloviivka1606/soloviivka160600065/59688813-music-note-vector-icon-white-on-black-background.jpg?ver=6",
        name,
        totalTracks: 0,
        releaseDate:
          "Wed May 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
        owner: [
          {
            name: "me",
          },
        ],
        tracks: [],
      };
      myPlaylists.push(list);
      console.log(myPlaylists);
      return ok({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE",
      });
    }

    function removeplaylist() {
      const idUrl = url.split("/");
      const id = idUrl[idUrl.length - 1];
      let playlist;

      myPlaylists.forEach((pl) => {
        if (pl.id === id) playlist = pl;
      });

      console.log(playlist);
      let index = myPlaylists.indexOf(playlist);
      myPlaylists.splice(index, 1);
      if (playlists)
        return ok({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE",
        });
      return error("no album found with this id");
    }

    function viewmyplaylists() {
      /// if(!isLoggedIn()) return unauthorized();
      console.log(myPlaylists);
      return ok(myPlaylists);
    }

    function viewplaylist() {
      const id = idFromUrl();
      let playlist;
      categories.Home.forEach((cat) => {
        if (cat.playlists) {
          cat.playlists.forEach((pl) => {
            if (pl.id === id) playlist = pl;
          });
        }
      });
      if (playlist) return ok(playlist);
      return error("no playlist found with this id");
    }

    function viewHomePlaylists() {
      return ok(playlists);
    }

    function viewmyplaylist() {
      /// if(!isLoggedIn()) return unauthorized();
      const id = idFromUrl();
      let playlist;
      myPlaylists.forEach((pl) => {
        if (pl.id === id) playlist = pl;
      });
      if (playlist) return ok(playlist);
      return error("no album found with this id");
    }

    function addPlaylist() {
      const { id } = body;
      let playlist;
      categories.Home.forEach((cat) => {
        if (cat.playlists) {
          cat.playlists.forEach((pl) => {
            if (pl.id === id) playlist = pl;
          });
        }
      });
      myPlaylists.push(playlist);
      if (playlists)
        return ok({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE",
        });
      return error("no album found with this id");
    }

    function viewmytracks() {
      /// if(!isLoggedIn()) return unauthorized();
      const idUrl = url.split("/");
      const type = idUrl[idUrl.length - 3];
      const id = idUrl[idUrl.length - 2];
      let playlist;
      myPlaylists.forEach((pl) => {
        if (pl.id === id) playlist = pl;
      });
      if (playlist) return ok(playlist.tracks);
      return error("no album found with this id");
    }

    function viewalbum() {
      const id = idFromUrl();
      let album;
      categories.Home.forEach((cat) => {
        if (cat.albums) {
          cat.albums.forEach((pl) => {
            if (pl.id === id) album = pl;
          });
        }
      });
      if (album) return ok(album);
      return error("no album found with this id");
    }

    function addAlbumImg() {
      return ok({ message: "album img success" });
    }

    function viewalbumtracks() {
      const idUrl = url.split("/");
      const type = idUrl[idUrl.length - 3];
      const id = idUrl[idUrl.length - 2];
      let album;
      categories.Home.forEach((cat) => {
        if (cat.albums) {
          cat.albums.forEach((pl) => {
            if (pl.id === id) album = pl;
          });
        }
      });
      if (album) return ok(album.tracks);
      return error("no album found with this id");
    }

    function getLibraryAlbums() {
      return ok(libraryAlbums);
    }

    function addalbum() {
      const { id } = body;
      let album;
      categories.Home.forEach((cat) => {
        if (cat.albums) {
          cat.albums.forEach((pl) => {
            if (pl.id === id) album = pl;
          });
        }
      });
      libraryAlbums.push(album);
      if (album)
        return ok({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE",
        });
      return error("no album found with this id");
    }

    function removetrack() {
      return ok({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE",
      });
    }

    function addtrack() {
      return ok({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE",
      });
    }

    function viewplaylisttracks() {
      const idUrl = url.split("/");
      const type = idUrl[idUrl.length - 3];
      const id = idUrl[idUrl.length - 2];
      let playlist;
      categories.Home.forEach((cat) => {
        if (cat.playlists) {
          cat.playlists.forEach((pl) => {
            if (pl.id === id) playlist = pl;
          });
        }
      });

      console.log(playlist);
      if (playlist) return ok(playlist.tracks);
      return error("no album found with this id");
    }

    function getArtistSongs() {
      return ok({ songs: artistManagment.artists[0].songs });
    }

    function getArtist() {
      const artist = {
        name: artistManagment.artists[0].name,
        imgUrl: artistManagment.artists[0].imgUrl,
        coverUrl: artistManagment.artists[0].coverUrl,
      };
      return ok({ artist });
    }
    function getArtistAlbums() {
      return ok({ albums: artistManagment.artists[0].albums });
    }
    function editeArtistSong() {
      const newSong = body;
      artistManagment.artists[0].songs.splice(
        artistManagment.artists[0].songs.findIndex((s) => s._id == newSong._id),
        1,
        newSong
      );
      return ok({ message: "updated" });
    }
    function editeArtistAlbum() {
      const newAlbum = body;
      artistManagment.artists[0].albums.splice(
        artistManagment.artists[0].albums.findIndex(
          (s) => s._id == newAlbum._id
        ),
        1,
        newAlbum
      );
      return ok({ message: "updated" });
    }
    function getCharts() {
      let lday = [];
      let lmonth = [];
      let lyear = [];
      let kday = [];
      let kmonth = [];
      let kyear = [];
      let y = 0;
      for (var i = 0; i < 24; i++) {
        y += Math.round(5 + Math.random() * (-5 - 5));
        lday.push({ y: y });
      }
      y = 0;
      for (var i = 0; i < 30; i++) {
        y += Math.round(5 + Math.random() * (-5 - 5));
        lmonth.push({ y: y });
      }
      y = 0;
      for (var i = 0; i < 12; i++) {
        y += Math.round(5 + Math.random() * (-5 - 5));
        lyear.push({ y: y });
      }
      y = 0;
      for (var i = 0; i < 24; i++) {
        y += Math.round(5 + Math.random() * (-5 - 5));
        kday.push({ y: y });
      }
      y = 0;
      for (var i = 0; i < 30; i++) {
        y += Math.round(5 + Math.random() * (-5 - 5));
        kmonth.push({ y: y });
      }
      y = 0;
      for (var i = 0; i < 12; i++) {
        y += Math.round(5 + Math.random() * (-5 - 5));
        kyear.push({ y: y });
      }
      const chart = {
        listeners: {
          lday,
          lmonth,
          lyear,
        },
        likes: {
          kday,
          kmonth,
          kyear,
        },
      };
      return ok(chart);
    }
    function deleteSong() {
      let id = idFromUrl();
      artistManagment.artists[0].songs.splice(
        artistManagment.artists[0].songs.findIndex((s) => s._id == id),
        1
      );
      return ok({ message: "deleted", _id: id });
    }
    function deleteAlbum() {
      let id = idFromUrl();
      artistManagment.artists[0].albums.splice(
        artistManagment.artists[0].albums.findIndex((a) => a._id == id),
        1
      );
      return ok({ message: "deleted", _id: id });
    }
    function newSong() {
      const _id = Math.ceil(Math.random() * 10000000);
      const song = {
        _id,
        imgUrl: "./assets/artist-song.jpg",
        likes: Math.ceil(Math.random() * 1000),
        listeners: Math.ceil(Math.random() * 1000),
        ...body,
      };
      artistManagment.artists[0].songs.push(song);
      console.log(artistManagment);
      return ok({ song });
    }
    function newAlbum() {
      const _id = Math.ceil(Math.random() * 10000000);
      const album = {
        _id,
        imgUrl: "./assets/artist-song.jpg",
        likes: Math.ceil(Math.random() * 1000),
        listeners: Math.ceil(Math.random() * 1000),
        ...body,
      };
      artistManagment.artists[0].albums.push(album);
      console.log(artistManagment);
      return ok({ album });
    }

    function edituser() {
      //if(!isLoggedIn()) return unauthorized();

      return ok({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE",
      });
    }

    function viewtracks() {
      const idUrl = url.split("/");
      const type = idUrl[idUrl.length - 3];
      const id = idUrl[idUrl.length - 2];
      if (type === "albums") {
        const album = albums.find((al) => al._id === id);
        if (album) return ok(album.tracks);
        return error("no album found with this idd");
      } else {
        const playlist = playlists.find((al) => al._id === id);
        if (playlist) return ok(playlist.tracks);
        return error("no playlist found with this idd");
      }
    }

    function viewuser() {
      //if(!isLoggedIn()) return unauthorized();
      return ok(users[0]);
    }

    function browse() {
      let browse = {
        Browse: [
          {
            color: "rgb(245, 155, 35)",
            name: "Chill",
            cardUrl: "hanshof",
            imgUrl:
              "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg",
          },
          {
            color: "rgb(75, 145, 125)",
            name: "WorkOut",
            cardUrl: "hanshof",
            imgUrl:
              "https://t.scdn.co/images/4b7472015a274eadbc00119f5141e548.jpeg",
          },
          {
            color: "rgb(180, 155, 200)",
            name: "Happy",
            cardUrl: "hanshof",
            imgUrl:
              "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
          },
          {
            color: "rgb(160,195,210)",
            name: "Most Popular Playlists",
            cardUrl: "hanshof",
            imgUrl:
              "https://t.scdn.co/images/68433b0ee5b5465b8e926c42b84cbcdb.jpeg",
          },
          {
            color: "rgb(160,195,210)",
            name: "Released Albums",
            cardUrl: "hanshof",
            imgUrl:
              "https://t.scdn.co/images/acc7b5d7b1264d0593ec05c020d0a689.jpeg",
          },
          {
            color: "rgb(245, 155, 35)",
            name: "popular Artists",
            cardUrl: "hanshof",
            imgUrl:
              "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg",
          },
        ],
      };
      return ok(browse);
    }

    function search() {
      let text = idFromUrl();
      console.log(typeof text);
      let searchResult = {
        topResult: [],
        playlists: [],
        albums: [],
        artists: [],
      };
      if (text) {
        let artists = [];
        let albums = [];
        let playlists = [];
        categories.Home.forEach((el) => {
          if (el["playlists"] && playlists.length < 6) {
            el.playlists.forEach((pl) => {
              if (
                pl.name.startsWith(text) ||
                pl.name.startsWith(text.toUpperCase())
              )
                playlists.push(pl);
            });
          }
          if (el["albums"] && albums.length < 6) {
            el.albums.forEach((al) => {
              if (
                al.name.startsWith(text) ||
                al.name.startsWith(text.toUpperCase()) ||
                al.name == text
              )
                albums.push(al);
            });
          }
          if (el["artists"] && artists.length < 6) {
            el.artists.forEach((al) => {
              if (
                al.name.startsWith(text) ||
                al.name.startsWith(text.toUpperCase()) ||
                al.name == text
              )
                artists.push(al);
            });
          }
        });
        searchResult["topResult"] = albums[0] || playlists[0] || artists[0];
        searchResult["playlists"] = playlists;
        searchResult["albums"] = albums;
        searchResult["artists"] = artists;
      }
      return ok(searchResult);
    }

    function recentSearch() {
      let recentIds = JSON.parse(localStorage.getItem("recent"));
      let recent = [];
      categories.Home.forEach((p) => {
        for (const r of categories.Home) {
          for (const key in r) {
            if (key == "playlists" || key == "albums" || key == "artists") {
              r[key].forEach((el) => {
                recentIds.forEach((id) => {
                  if (id == el.id) {
                    recent.push(el);
                    recentIds.splice(
                      recentIds.findIndex((ind) => ind == id),
                      1
                    );
                  }
                });
              });
            }
          }
        }
      });
      console.log(recent);
      return ok(recent);
    }

    function login() {
      const { email, password } = body;
      let user = users.find(
        (x) =>
          (x.email === email || x.name === email) && x.password === password
      );
      if (!user) return error("Incorrect username or password.");
      return ok({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE",
      });
    }

    function signup() {
      let { email, password, name, gender, birthDate } = body;
      switch (gender) {
        case 0:
          gender = "Mail";
          break;
        case 1:
          gender = "Femail";
          break;

        default:
          break;
      }
      if (email && password && name && gender && birthDate) {
        let user = users.find((x) => x.email === email);
        if (user) return error("We're sorry, that email is taken.");
        const _id = Math.floor(Math.random() * 100000);
        user = {
          _id,
          email,
          password,
          name,
          gender,
          birthDate,
        };
        users.push(user);
        return ok({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE",
        });
      }
    }

    function checkEmail() {
      const urlSplit = url.split("/");
      const email = urlSplit[urlSplit.length - 1];
      const user = users.find((user) => user.email === email);
      return user ? error("user Exist") : ok();
    }

    function forgetPassword() {
      const email = idFromUrl();
      let user = users.find((user) => user.email === email);
      if (user) {
        const hash = String(Math.floor(Math.random() * 100000000000));
        const _id = user._id;
        hashId.push({ hash, _id });
        return ok({ hash });
      }
      return error("no user");
    }

    function resetPassword() {
      const { newPassword, confirmedPassword } = body;
      if (newPassword !== confirmedPassword)
        return error("passwords not match");
      const hash = url.split("=")[1];
      const checkHashExists = hashId.find((h) => h.hash == hash);
      if (checkHashExists) {
        const user = users.find((user) => user._id === checkHashExists._id);
        user.password = newPassword;
        return ok({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE",
        });
      }
      return error("no hash key matchs");
    }

    function changePassword() {
      if (!isLoggedIn()) return unauthorized();
      const { oldPassword, newPassword, confirmedPassword } = body;
      const token = dataFromToken();
      const user = users.find((user) => user._id === token._id);
      if (user.password !== oldPassword)
        return error("enter correct old password");
      if (newPassword === oldPassword)
        return error("please enter another password");
      user.password = newPassword;
      return ok();
    }

    function home() {
      return ok(categories);
    }

    function seeAll() {
      const urlParts = url.split("/");
      const name = urlParts[urlParts.length - 3].split("%20").join(" ");
      const limit = parseInt(urlParts[urlParts.length - 2]);
      const start = parseInt(urlParts[urlParts.length - 1]);
      let cat = { ...categories.Home.find((cat) => `'${cat.name}'` == name) };
      cat.playlists = cat.playlists.slice(start, start + limit);
      return ok({ category: cat });
    }
    function viewartist() {
      const artists = {
        id: "3xl0OvcSlc9Mwe5ToaFtD3",
        type: "Artist",
        name: "Amr Diab",
        isFollowed: true,
        image:
          "https://i.scdn.co/image/5ac491f3bf789a7a1491b20de5e83006e0ef2ba0",
        imgUrl:
          "https://i.scdn.co/image/ab67616d0000b273abf13a20e745572fc39f939b",
      };
      console.log("viewArtist");
      return ok(artists);
    }

    function viewaboutartist() {
      const info = {
        about:
          "Amr Diab is a pop singer and songwriter from Egypt. He has won a record seven World Music Awards to date, and is considered the all-time best-selling musical artist from the Middle East. He is the creator of his own genre; he calls his meld of Arabic harmony and Western rhythms 'Mediterranean Music,' and it has influenced many subsequent artists.",
        listners: [
          { country: "cairo ,EG ", number: "68,297" },
          { country: "cairo, EG ", number: "68,297" },
          { country: "Alexandria, EG ", number: "14,957" },
          { country: "Paris, FR ", number: "12,001" },
          { country: "Stockholm, SE ", number: "11,962" },
          { country: "Amman, JO", number: "10,225 " },
        ],
      };
      console.log("viewAboutArtist");
      return ok(info);
    }

    function artisttop() {
      const artistTracks = {
        tracks: [
          {
            image:
              "https://i.scdn.co/image/ab67616d0000b273d352e68d3f9ef21f6d167a96",
            duration: 5,
            name: "Nour Eloyon",
            isLiked: true,
            id: "3JOF9NzQVkUXtCcJbEQuAbm",
            url:
              "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
            artists: [{ name: "AmrDiab" }],
          },
          {
            image:
              "https://i.scdn.co/image/ab67616d0000b2732a37edda69e67266f05a9753",
            duration: 4,
            name: "Tamali Maak",
            isLiked: true,
            id: "123",
            url:
              "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
            artists: [{ name: "AmrDiab" }],
          },
          {
            image:
              "https://i.scdn.co/image/ab67616d0000b2737e6e6d8ffdd9597a96ab019e",
            duration: 3,
            name: "Leily Nahary",
            isLiked: true,
            id: "123",
            url:
              "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
            artists: [{ name: "AmrDiab" }],
          },
          {
            image:
              "https://i.scdn.co/image/ab67616d0000b2737c607f5d6a8f657998ad9936",
            duration: 2,
            name: "Alby Etmannah",
            isLiked: true,
            id: "123",
            url:
              "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
            artists: [{ name: "AmrDiab" }],
          },
          {
            image:
              "https://i.scdn.co/image/ab67616d0000b273b4df726e2f184eacb95261a9",
            duration: 4,
            name: "Bayen Habeit",
            isLiked: true,
            id: "123",
            url:
              "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
            artists: [{ name: "AmrDiab" }],
          },
        ],
      };
      return ok(artistTracks);
    }

    function artistAlbums() {
      const artistAlbums = {
        albums: [
          {
            id: "3xl0OvcSlc9Mwe5ToaFtD23",
            image:
              "https://i.scdn.co/image/ab67616d0000b273abf13a20e745572fc39f939b",
            name: "Sahran",
            totalTracks: 10,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b2738a523d8df82dd2fb7f4e73b0",
            name: "Ya Tariq Ya Tariq",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273b4df726e2f184eacb95261a9",
            name: "Kol Hayaty",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b2737c607f5d6a8f657998ad9936",
            name: "Meaddy El Nas",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b2732d9f87aa8712f69aed19d68f",
            name: "Men Asmaa Allah El Hosna",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273477710b297411eb12928835d",
            name: "Ahla W Ahla",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273a2fe1e657e50598ca383ffaa",
            name: "Ya Tareeq",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b2734259ffed781de4b68c120976",
            name: "Ahla Ma Ghana",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273a57e351b00f7daf08e445300",
            name: "Alem Kalby",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b2734861e6bc90711f6aab9f714f",
            name: "Aktar Wahed",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b2732a37edda69e67266f05a9753",
            name: "Tamali Maak",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b27335f0ee93b7a038510fe0dad0",
            name: "Kamareen",
            totalTracks: 8,
          },
        ],
      };
      return ok(artistAlbums);
    }

    function getLikedSongs() {
      return ok(LikedSongs);
    }

    function UnLikeSongs() {
      return ok({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE",
      });
    }

    function LikeSongs() {
      const { id } = body;
      let list = {
        tracks: [
          {
            id,
          },
        ],
      };
      //LikedSongs.push(list);
      //console.log("l");
      //console.log(LikedSongs);
      return ok({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE",
      });
    }

    function FollowArtist() {
      console.log("ddd");
      const { id, type } = body;
      let artist = {
        id: "3xl0OvcSlc9Mwe5ToaFtD3",
        type: "Artist",
      };
      return ok({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE",
      });
    }

    function UnFollowArtist() {
      const idUrl = url.split("/");
      const type = idUrl[idUrl.length - 3];
      const id = idUrl[idUrl.length - 2];
      return ok({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE",
      });
    }

    function GetFollowedArtists() {
      return ok(FollowedArtists);
    }

    function artistSingles() {
      const singles = {
        tracks: [
          {
            name: "Ya Agmal Eyoun (Remix)",
            id: "1234",
            image:
              "https://i.scdn.co/image/ab67616d0000b27322f6db77466f8b64009eeef7",
            duration: 5,
            isLiked: true,
          },
          {
            name: "Yetalemo (Remix)",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b27322f6db77466f8b64009eeef7",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Youm Talat (Remix)",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b27322f6db77466f8b64009eeef7",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Awel Youm Fi Elboad",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b273683c4f14fd8c4191f066fb04",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Odam Merayetha",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b273683c4f14fd8c4191f066fb04",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Mitghayar",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b273683c4f14fd8c4191f066fb04",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Tehayrk",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b273683c4f14fd8c4191f066fb04",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Ana Gheir (Remix)",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b273683c4f14fd8c4191f066fb04",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Youm Talat",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b273683c4f14fd8c4191f066fb04",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Ana Gheir",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b273683c4f14fd8c4191f066fb04",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Bahebo",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b273683c4f14fd8c4191f066fb04",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Africa",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b27342c7fab68cc97d580526167c",
            duration: 3,
            isLiked: true,
          },
          ////
        ],
      };
      return ok(singles);
    }

    function relatedartists() {
      const related = {
        artists: [
          {
            name: "Hisham Abbas",
            id: "548",
            image:
              "data:image/jpeg;base64,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",
            type: "artist",
          },
          {
            name: "Assala",
            id: "48",
            image:
              "https://static.arageek.com/wp-content/uploads/2017/09/Assala-Nasri.jpeg",
            type: "artist",
          },
          {
            name: "Tamer",
            id: "548",
            image:
              "https://cdns-images.dzcdn.net/images/artist/b9f98ef37f48689fd196bfeac4266a68/500x500.jpg",
            type: "artist",
          },
          {
            name: "Assala",
            id: "48",
            image:
              "https://static.arageek.com/wp-content/uploads/2017/09/Assala-Nasri.jpeg",
            type: "artist",
          },
          {
            name: "Tamer",
            id: "548",
            image:
              "https://cdns-images.dzcdn.net/images/artist/b9f98ef37f48689fd196bfeac4266a68/500x500.jpg",
            type: "artist",
          },
          {
            name: "Assala",
            id: "48",
            image:
              "https://static.arageek.com/wp-content/uploads/2017/09/Assala-Nasri.jpeg",
            type: "artist",
          },
          {
            name: "Tamer",
            id: "548",
            image:
              "https://cdns-images.dzcdn.net/images/artist/b9f98ef37f48689fd196bfeac4266a68/500x500.jpg",
            type: "artist",
          },
          {
            name: "Assala",
            id: "48",
            image:
              "https://static.arageek.com/wp-content/uploads/2017/09/Assala-Nasri.jpeg",
            type: "artist",
          },
          {
            name: "Tamer",
            id: "548",
            image:
              "https://cdns-images.dzcdn.net/images/artist/b9f98ef37f48689fd196bfeac4266a68/500x500.jpg",
            type: "artist",
          },
        ],
      };
      return ok(related);
    }

    function getUser() {
      const user = {
        followersCount: 0,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8oDIkGmHQwugDVW0WKOvBjJdfJGDIgr7Ys7Y-18BDflD3DfoI&usqp=CAU",
        isPremium: true,
        _id: "123",
        name: "Mohsen",
      };
      return ok(user);
    }

    function getUserPLaylist() {
      const userplaylist = {
        playlists: [
          {
            name: "playList1",
            id: "4qrimFUz8KFC8W6WrDiDnd",
            image:
              "https://i.scdn.co/image/ab67706f00000002a86f06fb337166fc5047efee",
            owner: "Mohsen",
            description: "blabla",
            followersCount: 30,
          },
          {
            name: "playList2",
            id: "4qrimFUz8KFC8W6WrDiDne",
            image:
              "https://i.scdn.co/image/ab67616d00001e029df54b112dfa5da467239db0",
            owner: "Mohsen",
            description: "blabla2",
            followersCount: 30,
          },
          {
            name: "playList3",
            id: "4qrimFUz8KFC8W6WrDiDnf",
            image:
              "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
            owner: "Mohsen",
            description: "blabla3",
            followersCount: 30,
          },
          {
            name: "playList4",
            id: "4qrimFUz8KFC8W6WrDiDng",
            image:
              "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
            owner: "Mohsen",
            description: "blabla4",
            followersCount: 30,
          },
          {
            name: "playList5",
            id: "4qrimFUz8KFC8W6WrDiDnh",
            image:
              "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
            owner: "Mohsen",
            description: "blabla5",
            followersCount: 30,
          },
          {
            name: "playList6",
            id: "4qrimFUz8KFC8W6WrDiDni",
            image:
              "https://i.scdn.co/image/ab67616d00001e020a8faf02e33a80f13070b58a",
            owner: "Mohsen",
            description: "blabla6",
            followersCount: 30,
          },
          {
            name: "playList7",
            id: "4qrimFUz8KFC8W6WrDiDnj",
            image:
              "https://i.scdn.co/image/ab67616d00001e0284c0ae5b34bc3fe4238c3bdd",
            owner: "Mohsen",
            description: "blabla7",
            followersCount: 30,
          },
        ],
        totalPlaylists: 7,
      };
      return ok(userplaylist);
    }

    function moreArtistAlbums() {
      const moreArtistAlbums = {
        albums: [
          // {
          //   id: "1234",
          //   image: "https://i.scdn.co/image/ab67616d0000b273abf13a20e745572fc39f939b",
          //   name: "Sahran",
          //   totalTracks: 10
          //   },
          //   {
          //   id: "1235",
          //   image: "https://i.scdn.co/image/ab67616d0000b2738a523d8df82dd2fb7f4e73b0",
          //   name: "Ya Tariq Ya Tariq",
          //   totalTracks: 8
          //   },
          //   {
          //   id: "1235",
          //   image: "https://i.scdn.co/image/ab67616d0000b273b4df726e2f184eacb95261a9",
          //   name: "Kol Hayaty",
          //   totalTracks: 8
          //   },
          //   {
          //   id: "1235",
          //   image: "https://i.scdn.co/image/ab67616d0000b2737c607f5d6a8f657998ad9936",
          //   name: "Meaddy El Nas",
          //   totalTracks: 8
          //   },
          //   {
          //   id: "1235",
          //   image: "https://i.scdn.co/image/ab67616d0000b2732d9f87aa8712f69aed19d68f",
          //   name: "Men Asmaa Allah El Hosna",
          //   totalTracks: 8
          //   },
          //   {
          //   id: "1235",
          //   image: "https://i.scdn.co/image/ab67616d0000b273477710b297411eb12928835d",
          //   name: "Ahla W Ahla",
          //   totalTracks: 8
          //   },
          //   {
          //   id: "1235",
          //   image: "https://i.scdn.co/image/ab67616d0000b273a2fe1e657e50598ca383ffaa",
          //   name: "Ya Tareeq",
          //   totalTracks: 8
          //   },
          //   {
          //   id: "1235",
          //   image: "https://i.scdn.co/image/ab67616d0000b2734259ffed781de4b68c120976",
          //   name: "Ahla Ma Ghana",
          //   totalTracks: 8
          //   },
          //   {
          //   id: "1235",
          //   image: "https://i.scdn.co/image/ab67616d0000b273a57e351b00f7daf08e445300",
          //   name: "Alem Kalby",
          //   totalTracks: 8
          //   },
          //   {
          //   id: "1235",
          //   image: "https://i.scdn.co/image/ab67616d0000b2734861e6bc90711f6aab9f714f",
          //   name: "Aktar Wahed",
          //   totalTracks: 8
          //   },
          //   {
          //   id: "1235",
          //   image: "https://i.scdn.co/image/ab67616d0000b2732a37edda69e67266f05a9753",
          //   name: "Tamali Maak",
          //   totalTracks: 8
          //   },
          //   {
          //   id: "1235",
          //   image: "https://i.scdn.co/image/ab67616d0000b27335f0ee93b7a038510fe0dad0",
          //   name: "Kamareen",
          //   totalTracks: 8
          //   },
          {
            id: "1234",
            image:
              "https://i.scdn.co/image/ab67616d0000b273d352e68d3f9ef21f6d167a96",
            name: "Nour El Aien",
            totalTracks: 10,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273f5909355fb17dc0fabdce860",
            name: "Ya tareq",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273f662d1bbdac0e7a24acec9e6",
            name: "Ya Taree'",
            totalTracks: 8,
          },
        ],
      };
      return ok(moreArtistAlbums);
    }

    function artistMoreSingles() {
      const moreSingles = {
        tracks: [
          // {
          //   name: "Ya Agmal Eyoun (Remix)",
          //   id: "1234",
          //   image: "https://i.scdn.co/image/ab67616d0000b27322f6db77466f8b64009eeef7",
          //   duration: 5,
          //   isLiked: true
          // },
          // {
          //   name: "Yetalemo (Remix)",
          //   id: "124",
          //   image: "https://i.scdn.co/image/ab67616d0000b27322f6db77466f8b64009eeef7",
          //   duration: 3,
          //   isLiked: true
          // },
          // {
          //   name: "Youm Talat (Remix)",
          //   id: "124",
          //   image: "https://i.scdn.co/image/ab67616d0000b27322f6db77466f8b64009eeef7",
          //   duration: 3,
          //   isLiked: true
          // },
          // {
          //   name: "Awel Youm Fi Elboad",
          //   id: "124",
          //   image: "https://i.scdn.co/image/ab67616d0000b273683c4f14fd8c4191f066fb04",
          //   duration: 3,
          //   isLiked: true
          // },
          // {
          //   name: "Odam Merayetha",
          //   id: "124",
          //   image: "https://i.scdn.co/image/ab67616d0000b273683c4f14fd8c4191f066fb04",
          //   duration: 3,
          //   isLiked: true
          // },
          // {
          //   name: "Mitghayar",
          //   id: "124",
          //   image: "https://i.scdn.co/image/ab67616d0000b273683c4f14fd8c4191f066fb04",
          //   duration: 3,
          //   isLiked: true
          // },
          // {
          //   name: "Tehayrk",
          //   id: "124",
          //   image: "https://i.scdn.co/image/ab67616d0000b273683c4f14fd8c4191f066fb04",
          //   duration: 3,
          //   isLiked: true
          // },
          // {
          //   name: "Ana Gheir (Remix)",
          //   id: "124",
          //   image: "https://i.scdn.co/image/ab67616d0000b273683c4f14fd8c4191f066fb04",
          //   duration: 3,
          //   isLiked: true
          // },
          // {
          //   name: "Youm Talat",
          //   id: "124",
          //   image: "https://i.scdn.co/image/ab67616d0000b273683c4f14fd8c4191f066fb04",
          //   duration: 3,
          //   isLiked: true
          // },
          // {
          //   name: "Ana Gheir",
          //   id: "124",
          //   image: "https://i.scdn.co/image/ab67616d0000b273683c4f14fd8c4191f066fb04",
          //   duration: 3,
          //   isLiked: true
          // },
          // {
          //   name: "Bahebo",
          //   id: "124",
          //   image: "https://i.scdn.co/image/ab67616d0000b273683c4f14fd8c4191f066fb04",
          //   duration: 3,
          //   isLiked: true
          // },
          // {
          //   name: "Africa",
          //   id: "124",
          //   image: "https://i.scdn.co/image/ab67616d0000b27342c7fab68cc97d580526167c",
          //   duration: 3,
          //   isLiked: true
          // },
          // ////
          {
            name: "Gamaa Habybak",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b273f3a86e44b95285f50078e1ff",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Ma'darsh Al Nesyan",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b2733ac7efd171037c32838c8cda",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Arabic Gold Mix",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b273d2cf2934b0f546289e8e744a",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Bahebak Ana",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b273699f6b9d2d6d11117b2ad7d0",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Bayen Habeit",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b273b2902653b3d6e51ec207db32",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Ahla W Ahla (Live)",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b2735dca00897027e36f79730e2a",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Ahla W Ahla (Summer Edition)",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b2738064b23afaf3f020c41ed477",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Al Qahira (feat. Mohamed Mounir)",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b273c42e238d9bce4a1402a3cd67",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Balash Tebaed",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b2735326744e2ce96493c500bbbb",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Ya kalby malk hzen",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b27329a1c270352c212278d6cd82",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Ya mertahen fi alhawa",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b27329a1c270352c212278d6cd82",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Ya shared alfakr",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b27329a1c270352c212278d6cd82",
            duration: 3,
            isLiked: true,
          },
          {
            name: "Kona Habaib",
            id: "124",
            image:
              "https://i.scdn.co/image/ab67616d0000b27329a1c270352c212278d6cd82",
            duration: 3,
            isLiked: true,
          },
        ],
      };
      return ok(moreSingles);
    }

    function artistAppearson() {
      const appearsOn = {
        albums: [
          {
            id: "1234",
            image:
              "https://i.scdn.co/image/ab67616d0000b2737e6e6d8ffdd9597a96ab019e",
            name: "Oriental Rainbow",
            totalTracks: 10,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273ab36966b45d8fd889819ab08",
            name: "Best for Hamaki and Amr Diab",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273af927a4a32d885173b38a767",
            name: "La fête maghrebine",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b27339cea39e3c645714c6d6072b",
            name: "Tea Time",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273ea3a01d137675ffbac44240e",
            name: "Sur un air oriental",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273882481de49abcf9f0f4c22b2",
            name: "Kane Stin Akri",
            totalTracks: 8,
          },
          // ,
          // {
          // id: "1235",
          // image: "https://i.scdn.co/image/ab67616d0000b273d5bd978a5480ac35e2062b3c",
          // name: "Arabia",
          // totalTracks: 8
          // },
          // {
          // id: "1235",
          // image: "https://i.scdn.co/image/ab67616d0000b27309c55944c20f92f247db1c19",
          // name: "Arabic Rainbow",
          // totalTracks: 8
          // },
          // {
          // id: "1235",
          // image: "https://i.scdn.co/image/ab67616d0000b2733bfe53ed764afff780b3c6e4",
          // name: "Alem Kalby",
          // totalTracks: 8
          // },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b2734861e6bc90711f6aab9f714f",
            name: "Aktar Wahed",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b2732a37edda69e67266f05a9753",
            name: "Tamali Maak",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b27335f0ee93b7a038510fe0dad0",
            name: "Kamareen",
            totalTracks: 8,
          },
        ],
      };
      return ok(appearsOn);
    }

    function artistMoreAppearson() {
      const moreAppearsOn = {
        albums: [
          {
            id: "1234",
            image:
              "https://i.scdn.co/image/ab67616d0000b2737e6e6d8ffdd9597a96ab019e",
            name: "Oriental Rainbow",
            totalTracks: 10,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273ab36966b45d8fd889819ab08",
            name: "Best for Hamaki and Amr Diab",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273af927a4a32d885173b38a767",
            name: "La fête maghrebine",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b27339cea39e3c645714c6d6072b",
            name: "Tea Time",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273ea3a01d137675ffbac44240e",
            name: "Sur un air oriental",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273882481de49abcf9f0f4c22b2",
            name: "Kane Stin Akri",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273d5bd978a5480ac35e2062b3c",
            name: "Arabia",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b27309c55944c20f92f247db1c19",
            name: "Arabic Rainbow",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b2733bfe53ed764afff780b3c6e4",
            name: "Alem Kalby",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b2734861e6bc90711f6aab9f714f",
            name: "Aktar Wahed",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b2732a37edda69e67266f05a9753",
            name: "Tamali Maak",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b27335f0ee93b7a038510fe0dad0",
            name: "Kamareen",
            totalTracks: 8,
          },
          {
            id: "1234",
            image:
              "https://i.scdn.co/image/ab67616d0000b273d352e68d3f9ef21f6d167a96",
            name: "Nour El Aien",
            totalTracks: 10,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273f5909355fb17dc0fabdce860",
            name: "Ya tareq",
            totalTracks: 8,
          },
          {
            id: "1235",
            image:
              "https://i.scdn.co/image/ab67616d0000b273f662d1bbdac0e7a24acec9e6",
            name: "Ya Taree'",
            totalTracks: 8,
          },
        ],
      };
      return ok(moreAppearsOn);
    }

    function toBePremium() {
      const email = body;
      let user = users.find((x) => x.email === email);
      if (!user) return error("invalid email");
      return ok({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE",
      });
    }

    /////////
    // helper functions

    function ok(body?) {
      console.log("successMock");
      return of(new HttpResponse({ status: 200, body }));
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: "Unauthorised" } });
    }

    function dataFromToken() {
      const jwt = new JwtHelper();
      return jwt.decodeToken(headers.get("token"));
    }

    function error(message) {
      console.log("errMock");
      return throwError({ error: { message } });
    }

    function isLoggedIn() {
      return (
        headers.get("token") ===
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFobWVkIEhlbG15IiwiaWF0IjoxNTE2MjM5MDIyfQ.1IywQey38ixVhRWY9cXsk8xzD7Z-aN9P-jQUsHwGhBE"
      );
    }

    function idFromUrl() {
      const urlParts = url.split("/");
      return urlParts[urlParts.length - 1];
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: MockServerService,
  multi: true,
};
