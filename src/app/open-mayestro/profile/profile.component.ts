import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AssetsService } from 'src/app/shared/assets/assets.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email:string;
  day
  month
  year
  user:any;
  counrty:string;
  gender:string="female";
  date:Date;
  months:any[]
  days:any[]
  years:any[]
  
  log(x){
    console.log(x);
  }
  /**
   * submit function to get input to edit user's data
   * 
   * @param f form value to send to server
   */
  submit(f){
    if(f.dirty){
      this.email=f.value.email;
    }
    
    console.log(this.email);
    this.service.UpdateUser(this.user)
      .subscribe(resp=>{
        this.user.gender=this.gender
        this.user.country=this.counrty
        console.log(resp)
      }
      )
  }
  form:any;
  selected:any;
  constructor(private service:UserService,private assets:AssetsService) { 
   
  }
/**
 * contains functions of http requests to get user data 
 */
  ngOnInit() {
    this.days=this.assets.days();
    this.months=this.assets.months();
    this.years=this.assets.years();
    this.form= new FormGroup({
      email:new FormControl(),
    })
    this.service.getEmail()
      .subscribe(
        (data:any) =>{
          this.email=(data.email);
          this.user=(data);
          this.gender=(data.gender);
          this.counrty=(data.country);
          this.date=(data.birthDate);
          this.date=new Date(this.date);
          this.month=this.date.getMonth()+1;
          this.day=this.date.getDate();
          this.year=this.date.getFullYear();
        });
    
  }
  chooseCountry(event:any){
    this.counrty=event.target.value;
    console.log(this.counrty);
  }
  chooseDay(event:any){
    this.day=event.target.value;
    this.date.setDate(this.day);
    console.log(this.day);
  }
  chooseMonth(event:any){
    this.month=event.target.value;
    this.date.setMonth(this.month);
    console.log(this.month);
  }
  chooseYear(event:any){
    this.year=event.target.value;
    this.date.setFullYear(this.year);
    console.log(this.year);
  }
  chooseGender(event:any){
    this.gender=event.target.value;
    console.log(this.gender);
  }
}


