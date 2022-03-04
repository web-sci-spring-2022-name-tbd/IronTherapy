import { LoginService } from './../login.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  @Output() login = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  signUp(event: Event) {
    event.preventDefault();
    this.loginService.logIn();
  }

  goLogin() {
    this.login.emit(false);
  }

}
