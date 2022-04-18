import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  constructor(private http:HttpClient) { }
 
 //for github profile

 getUser(username:string):any{
   const promise = new Promise((resolve,reject)=>{
    resolve( this.http.get(`https://api.github.com/users/${username}`).toPromise())
   }) 
   return promise

   
  }
  //for github repos
  
  getRepo(username:string):any{
    const promise = new Promise((resolve,reject)=>{
     resolve( this.http.get(`https://api.github.com/users/${username}/repos`).toPromise())
    }) 
    return promise
 
    
   }

 
  }







