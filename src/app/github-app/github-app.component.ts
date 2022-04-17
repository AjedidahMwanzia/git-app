import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {
  Username!: any;
  
 
 

  constructor( private ApiService :ApiService ) {}
  
  
  

  ngOnInit(): void {
  }

}









function ngOnInit() {
  throw new Error('Function not implemented.');
}

