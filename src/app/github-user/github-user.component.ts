import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {


  Users:any =[]

  constructor( private ApiService :ApiService ) {}
  getUsername():void{
   this.ApiService.getUsername('AjedidahMwanzia').then((users:any)=>{
     this.Users = users
    console.log(this.Users)
   })
  }

    
  ngOnInit(): void {
   this.getUsername()
 
  }

}


