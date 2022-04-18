import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { User } from '../user';


@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {
  
  users:any= []
  user!: User;


 name = new FormControl('',Validators.required)

  constructor( private ApiService :ApiService ) {}
//   getUsername(username:string):void{
//    this.ApiService.getUsername(username).then((users:any)=>{
//      this.user = users
//    })
//   }

 getUser():void{
 this.ApiService.getUser('AjedidahMwanzia').then ((users:any)=>{
//  this.users=users
this.user = new User(users.login,users.name,users.blog,users.html_url,users.location,users.followers,users.following,users.bio,users.id)
// console.log(this.users)
//  console.log(this.user)
})
  }
  
//  searchUsers(){
//  let username = this.name.value
//  this.getUsername(username)

//    return false
   
//  }

    
 ngOnInit(): void {
this.getUser()

 }

}

