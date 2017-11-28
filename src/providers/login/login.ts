import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

export interface User{
  username: string;
  password: string;

}

@Injectable()
export class LoginProvider {

  constructor() {
    
  }

  login(user: User): boolean{
    return user.username == "admin" && user.password == "admin";
  }

  isLoggedIn(){
    return false;
  }

  logout(){
    // Log user out
  }

}
