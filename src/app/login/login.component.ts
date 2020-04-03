import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;

  constructor(private loginServ:LoginService) {}

  ngOnInit() {
  }

  login(){
    this.loginServ.login(this.username,this.password).subscribe(
      (resp)=>{
          localStorage.setItem('token', resp['token']);
          this.password = '';
          this.username = '';
        },
      (error)=>console.log(error)
    )
  }

  logout(){
    this.loginServ.logout();
  }

}
