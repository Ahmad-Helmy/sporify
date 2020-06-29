/**
 * artist card interface including album and song
 */
export interface IArtistCard {
  imgUrl: string;
  _id: string;
  name: string;
  description: string;
  likes: number;
  listeners: number;
  songs?: Array<any>;
}
