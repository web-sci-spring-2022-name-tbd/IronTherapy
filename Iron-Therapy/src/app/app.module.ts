import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GoalComponent } from './goal/goal.component';

import { ExerciseBoxComponent } from './exercise-box/exercise-box.component';
import { WorkoutBoxComponent } from './workout-box/workout-box.component';
import { HistoryBoxComponent } from './history-box/history-box.component';
import { DummyComponent } from './dummy/dummy.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ChartComponent } from './chart/chart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomepageComponent,
    GoalComponent,
    ExerciseBoxComponent,
    WorkoutBoxComponent,
    HistoryBoxComponent,
    DummyComponent,
    AnalysisComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
