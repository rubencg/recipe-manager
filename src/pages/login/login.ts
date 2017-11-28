import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider, User } from '../../providers/login/login';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string;
  password: string;

  constructor(private loginProvider: LoginProvider) {
  }

  ionViewDidLoad() {
    
  }

  login(){
    let user: User = {
      username: this.username,
      password: this.password
    };
    if(this.loginProvider.login(user)){
      console.log("logged in");
    }
  }

}
