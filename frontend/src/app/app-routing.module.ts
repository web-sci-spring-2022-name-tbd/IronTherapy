import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './guards/auth.guard';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { HistoryComponent } from './components/history/history.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: 'homepage', component: HomepageComponent },
      { path: 'analysis', component: AnalysisComponent },
      { path: 'exercises', component: ExercisesComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'workouts', component: WorkoutsComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
