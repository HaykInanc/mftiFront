import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(username, password ){
    let httpParams = new HttpParams()
                        .append('username', username)
                        .append('password', password);
  
    return this.http.post('http://127.0.0.1:8000/api/token/', httpParams)
  }

  logout(){
    localStorage.removeItem('token');
  }

}
