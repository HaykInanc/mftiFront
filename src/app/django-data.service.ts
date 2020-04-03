import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DjangoDataService {
  http:HttpClient;
  httpOptions:any;
  constructor(_http:HttpClient) { 
    this.http = _http;
  }

  getAll(){
    const myHeaders = new HttpHeaders()
                .set('Authorization', 'token '+ localStorage.getItem('token'));
    console.log({headers: myHeaders});
    return this.http.get('http://127.0.0.1:8000/api/goods/', {headers:myHeaders});
  }
  
  deleteItem(id){
    const myHeaders = new HttpHeaders()
    .set('Authorization', 'token '+ localStorage.getItem('token'));
    
    let options = { 
      headers: myHeaders,
      body: {id: id} 
    };
    return this.http.delete('http://127.0.0.1:8000/api/goods/', options);
  }

  addItem(obj){ 
    const myHeaders = new HttpHeaders().set('Authorization', 'token '+ localStorage.getItem('token'));
    return this.http.post('http://127.0.0.1:8000/api/goods/', obj, {headers:myHeaders});
  }

}
