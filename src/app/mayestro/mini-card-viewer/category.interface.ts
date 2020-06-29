import { IPlaylist } from "./playlists.interface";
import { ICard } from "../card/card.interface";

export class ICategory {
  name: string;
  description: string;
  ID: string;
  cards: Array<any>;
  type: string;
}
