import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  email:any;
  date:Date;
  country:string;
  username:string;
  day
  month
  year
  constructor(private service:UserService) { }
/**
 * contains functions of http requests to get user data 
 */
  ngOnInit() {
    this.service.getEmail()
    .subscribe(
      (data :any)=>{
       this.email=data.email;
      }
    )
      this.service.getDate()
      .subscribe(
        (data :any)=>{
          this.date=data.birthDate;
          this.date=new Date(this.date);
          this.month=this.date.getMonth()+1;
          this.day=this.date.getDate();
          this.year=this.date.getFullYear();
        }
      )
      this.service.getCountry()
      .subscribe(
        (data :any)=>{
          this.country=data.country;
        }
      )
      this.service.getUsername()
      .subscribe(
        (data :any)=>{
          this.username=data.name;
        }
      )
  }

}
