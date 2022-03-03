import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() changeNavEvent = new EventEmitter<string>();
  

  constructor() { }

  ngOnInit(): void {
  }

  emitScore(page: string) {
    this.changeNavEvent.next(page);
  }

}
