import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TestComponentComponent } from './components/test-component/test-component.component';
import { ListPointsComponent } from './components/list-points/list-points.component';
import { RailwayComponent } from './view/railway/railway.component';
import { QuestionComponent } from './components/question/question.component';
import { VideoComponent } from './components/video/video.component';
import { AchievementsComponent } from './view/achievements/achievements.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ListPointsComponent,
    RailwayComponent,
    QuestionComponent,
    VideoComponent,
    AchievementsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
