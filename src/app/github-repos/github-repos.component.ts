import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Repos } from '../repos';


@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {
  username!: any;
  repos:any =[]
  repo!: Repos[];
 name = new FormControl('AjedidahMwanzia')

  constructor( private ApiService :ApiService ) {}
  getRepo(username:string):void{
   this.ApiService.getRepo(username).then((repos:any)=>{
     this.repos = repos
   })
  }
 searchRepos(){
 this.getRepo(this.name.value)
   return false
   
 }
    
 ngOnInit(): void {


 }

}

