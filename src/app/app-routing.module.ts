import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAchivementsComponent } from './view/list-achivements/list-achivements.component';
import { RailwayComponent } from './view/railway/railway.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'achievements', component: ListAchivementsComponent },
  { path: 'railway', component: RailwayComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
