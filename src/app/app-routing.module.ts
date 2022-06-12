import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsComponent } from './view/achievements/achievements.component';
import { RailwayComponent } from './view/railway/railway.component';
import { RailwayListComponent } from './view/railway-list/railway-list.component';
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'railway-list', component: RailwayListComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'railway/:id', component: RailwayComponent },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
