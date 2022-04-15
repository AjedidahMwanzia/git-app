import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { ApiService } from '../api.service';


@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {
  public githubUserQuery!: string;
  public githubProfile:any;
  public githubRepos!: any[]; 
 
  constructor(ApiService :ApiService ) {}
   
   
  ngOnInit(): void {
  }

}


