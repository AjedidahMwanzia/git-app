import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';


@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {
  Username!: string;
  
 
 Users:any = ''

  constructor( private ApiService :ApiService ) {}
  getUsername():void{
   this.ApiService.getUsername('AjedidahMwanzia').then((users:any)=>{
     this.Users = users
    
   })
  }

    
  ngOnInit(): void {
   this.getUsername()
 
  }

}







