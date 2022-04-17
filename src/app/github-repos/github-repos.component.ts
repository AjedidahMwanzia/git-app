import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';


@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {

  repos:any =[]

  constructor( private ApiService :ApiService ) {}
  getRepo():void{
   this.ApiService.getRepo('AjedidahMwanzia').then((repos:any)=>{
     this.repos = repos
    console.log(this.repos)
   })
  }

    
  ngOnInit(): void {
   this.getRepo()
 
  }

}

