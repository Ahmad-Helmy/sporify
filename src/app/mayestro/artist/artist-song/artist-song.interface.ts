import { Time } from '@angular/common';
/**
 * Artist card interface
 */
export interface IASong{
    name: string;
    duration:Time;
    image:string;
    isLiked:boolean;
    id:string;
    url:string;
    artist:string;
}