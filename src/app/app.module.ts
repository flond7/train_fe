import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestComponentComponent } from './components/test-component/test-component.component';
import { ListPointsComponent } from './components/list-points/list-points.component';
import { RailwayComponent } from './view/railway/railway.component';
import { QuestionComponent } from './components/question/question.component';
import { VideoComponent } from './components/video/video.component';
import { AchievementsComponent } from './view/achievements/achievements.component';
import { SafePipe } from './pipes/safe.pipe';
import { LoginComponent } from './view/login/login.component';
import { RailwayListComponent } from './view/railway-list/railway-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ListPointsComponent,
    RailwayComponent,
    QuestionComponent,
    VideoComponent,
    AchievementsComponent,
    SafePipe,
    LoginComponent,
    RailwayListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
