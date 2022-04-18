import { Component,Output, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Repos } from '../repos';
import { User } from '../user';




@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {
@Output () githubRepos:any;
  username!: any;
  repos:any =[]
  repo!: Repos[];

 name = new FormControl('',Validators.required)

  constructor( private ApiService :ApiService ) {}
  getRepo(username:string):void{
   this.ApiService.getRepo(username).then((repos:any)=>{
     this.repos = repos
   })
  }
 searchRepos(){
   let username = this.name.value
 this.getRepo(username)

   return false
   
 }
    
 ngOnInit(): void {


 }

}

