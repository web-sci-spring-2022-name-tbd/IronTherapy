import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { RequestsService } from "../../services/requests.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  
  constructor(private auth: AuthService, private request: RequestsService) {}

  ngOnInit(): void {
    // Get the goals and load them into the page
    this.request.getGoals().subscribe((goals) => {
      console.log(goals);
    });
  }

  // Call the sign out method from the auth service
  logout() {
    this.auth.SignOut();
  }



}
