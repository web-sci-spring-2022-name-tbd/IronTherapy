import { LoginService } from './../login.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  @Output() signUp = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  logIn(event: Event) {
    event.preventDefault();
    this.loginService.logIn();
  }

  goSignUp() {
    this.signUp.emit(true);
  }
}
