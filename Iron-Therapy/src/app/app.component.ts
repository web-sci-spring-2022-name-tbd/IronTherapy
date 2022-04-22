import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Iron-Therapy';
  pages = ['analysis', 'history', 'exercise','workout-plans', 'home'];



  loggedIn: boolean = false;
  signUp: boolean = false;

  constructor(private loginService: LoginService) { }

  private firstLog: boolean = false;

  ngOnInit(): void {
    this.loginService.loggedIn$.subscribe((logged) => {
      this.loggedIn = logged;
      if (this.firstLog) this.changePage('home');
      this.firstLog = true;
    });
  }

  // hide all of the other pages
  changePage(page: string) {
    console.log(`changing page to ${page}`)
    this.pages.forEach(page_ => {
      if (page_ !== page) {
        console.log(`hiding ${page_}`)
        let el = document.getElementById(page_) as HTMLElement;
        if (el) hide(el);
      }
    });

    // show the specific page
    let el = document.getElementById(page) as HTMLElement;
    if (el) show(el);
  }

  showSignUp(signUp: boolean) {
    console.log("here");
    this.signUp = signUp;
  }
}


// Show an element
function show(elem: HTMLElement) {
  elem.style.display = 'block';
};

// Hide an element
function hide(elem: HTMLElement) {
  elem.style.display = 'none';
};