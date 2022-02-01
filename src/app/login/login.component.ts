import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private loginService: LoginService) {  }

  username: string;
  password: string;
  isAdmin: boolean;

  

  ngOnInit(): void {
    this.loginService.setIsAdmin(this.isAdmin)
  }


  

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["dashboard"]);  
      this.loginService.setIsAdmin(this.isAdmin = true);      
    }
    else if (this.username == 'user' && this.password == 'user'){
      this.router.navigate(["dashboard"]);
      this.loginService.setIsAdmin(this.isAdmin = false);
    }
    else {
      alert("Invalid credentials");
    }
  }

}
