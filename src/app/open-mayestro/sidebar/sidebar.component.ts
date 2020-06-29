import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  image:any;
  constructor(private service:UserService) { }

  ngOnInit() {
    this.service.getEmail()
    .subscribe(
      (data :any)=>{
       this.image=data.image;
      }
    )
  }

}
