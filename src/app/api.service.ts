import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  constructor(private http:HttpClient) { }
 
 //for github profile

 getUsername(username:any){
    let url= `https://api.github.com/users/${username}`;

    return this.http.get(url)
    
  }

  //for github repositories
  getRepos(username:any){
    let url= `https://api.github.com/users/${username}/repos`;

    return this.http.get(url)
    
  }



}



