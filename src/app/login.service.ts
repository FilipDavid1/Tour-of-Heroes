import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  isAdmin: boolean;

  constructor() { }

  setIsAdmin(a: any){
    this.isAdmin = a;
  }

  getIsAdmin(){
    return this.isAdmin;
  }
}
