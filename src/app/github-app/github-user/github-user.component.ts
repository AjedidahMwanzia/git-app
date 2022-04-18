import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { User } from '../../user';


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

 getUser(username:string):void{
 this.ApiService.getUser(username).then ((users:any)=>{

this.user = new User(users.login,users.avatar_url,users.name,users.blog,users.login,users.location,users.followers,users.following,users.bio,users.id)
 console.log(this.user)
})
  }
  searchUsers(){
    let username =this.name.value
    this.getUser(username)
    return false
  }
     
 ngOnInit(): void {


 }

}

