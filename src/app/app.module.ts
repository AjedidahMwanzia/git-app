import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubAppComponent } from './github-app/github-app.component';
import { GithubReposComponent } from './github-app/github-repos/github-repos.component';
import { GithubPipePipe } from './github-pipe.pipe';
import { DateCountPipe } from './date-count.pipe';
import { GithubUserComponent } from './github-app/github-user/github-user.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    GithubAppComponent,
    GithubReposComponent,
    GithubPipePipe,
    DateCountPipe,
    GithubUserComponent,
    HighlightDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
