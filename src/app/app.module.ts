import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TestComponentComponent } from './components/test-component/test-component.component';
import { ListPointsComponent } from './components/list-points/list-points.component';
import { ListAchivementsComponent } from './view/list-achivements/list-achivements.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ListPointsComponent,
    ListAchivementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
