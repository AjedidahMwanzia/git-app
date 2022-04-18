import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubAppComponent } from './github-app/github-app.component';
import { GithubReposComponent } from './github-app/github-repos/github-repos.component';
import { GithubUserComponent } from './github-app/github-user/github-user.component';

const routes: Routes = [
 {path:"github-app",component:GithubAppComponent},
 {path:"github-Users",component:GithubUserComponent},
 {path:"github-Repos",component:GithubReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
