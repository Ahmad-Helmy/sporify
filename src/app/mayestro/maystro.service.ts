import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MaystroService {

  constructor(private http:HttpClient, private auth:AuthService) { 
  }
  getArtist(id){
    return this.http.get(`${this.auth.URL}'/artist/${id}'`)
  }
}
