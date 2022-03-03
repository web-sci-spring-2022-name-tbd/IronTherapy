import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  @Input() name: string = 'dummy';
  
  constructor() { }

  ngOnInit(): void {
  }

}
