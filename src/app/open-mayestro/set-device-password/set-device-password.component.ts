import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-set-device-password',
  templateUrl: './set-device-password.component.html',
  styleUrls: ['./set-device-password.component.css']
})
export class SetDevicePasswordComponent implements OnInit {
  
  
  constructor(private service: UserService) { }

  ngOnInit() {
    
    
  }
    
  }


