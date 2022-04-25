// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase Imports for Auth
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

// Env
import { environment } from '../environments/environment';

// Misc
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

// App Component
import { AppComponent } from './app.component';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { GoalComponent } from './components/goal/goal.component';
import { ExerciseBoxComponent } from './components/exercise-box/exercise-box.component';
import { WorkoutBoxComponent } from './components/workout-box/workout-box.component';
import { HistoryBoxComponent } from './components/history-box/history-box.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { ChartComponent } from './components/chart/chart.component';

// Services
import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';
import { RequestsService } from './services/requests.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { HistoryComponent } from './components/history/history.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    GoalComponent,
    ExerciseBoxComponent,
    WorkoutBoxComponent,
    HistoryBoxComponent,
    DummyComponent,
    AnalysisComponent,
    ChartComponent,
    DashboardComponent,
    WorkoutsComponent,
    ExercisesComponent,
    HistoryComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [LoginService, AuthService, RequestsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
