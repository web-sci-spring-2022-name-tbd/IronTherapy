import { Component, OnInit } from '@angular/core';
import { DummyComponent } from './dummy/dummy.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Iron-Therapy';
  pages = ['analysis', 'dummy', 'workout-plans'];

  ngOnInit(): void {
    this.changePage('dummy');
  }

  // hide all of the other pages
  changePage(page: string) {
    console.log(`changing page to ${page}`)
    this.pages.forEach(page_ => {
      if (page_ !== page) {
        console.log(`hiding ${page_}`)
        let el = document.getElementById(page_) as HTMLElement;
        hide(el);
      }
    });

    // show the specific page
    let el = document.getElementById(page) as HTMLElement;
    show(el);
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