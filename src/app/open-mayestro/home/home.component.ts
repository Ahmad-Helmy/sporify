import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards:any[];
  constructor(private service: UserService ) { }

  ngOnInit() {
    
    this.service.getHomePlaylists()
            .subscribe(
              (data:any) =>{  
              this.cards=data;
          });
  }


}
