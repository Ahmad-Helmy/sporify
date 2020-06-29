import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-get-premium',
  templateUrl: './get-premium.component.html',
  styleUrls: ['./get-premium.component.css']
})
export class GetPremiumComponent implements OnInit {

  /**
   * error message that display to user if email invalid
   */
  errMsg: string;
  /**
   * the premuim plan
    */
  plan:string;
  /**
   * monthly plan
   */
  monthly=true;
  /**
   * yearly plan
   */
  yearly=false;

  constructor(private route:ActivatedRoute,private service:UserService, private router:Router) { }
  
  ngOnInit() {
   /**
    * get the plan from the router link and pass it to html 
    */
    this.route.params.subscribe(
      param=>{
        this.plan=param["plan"]
        return this.plan
      })
      if(this.plan=="yearly"){
        this.monthly=false;
        this.yearly=true;
      }
  }

  /**
   * disabeld Submit button if email invalid
   * @param f form object
   */
  invalid(f) {
    return f.invalid;
  }
  /**
   * submit email to the server
   * @param f form object
   */
  submit(f) {
    // f.valid;
    
    if (this.invalid(f)) {
      return;
    };
    this.service.toBePremium(f.value.email).subscribe(
      res => {
        this.router.navigate(["/open.mayestro/overview"]);
      },
      err => {
        console.log(err);
        this.errMsg = "Invalid email";
      }
    );
  }
  
}
