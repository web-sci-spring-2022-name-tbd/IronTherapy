import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  graphs: number = 3;
  constructor() { }

  ngOnInit(): void {
    this.showGraph(0);
  }

  showGraph(num: number) {
    for (let i = 0; i < 3; i++) {
      let graph = document.getElementById(`graph-${i}`) as HTMLElement;
      if (i === num) {
        show(graph);
      } else {
        hide(graph);
      }
    }
  }

}
// Show an element
function show (elem: HTMLElement) {
	elem.style.display = 'block';
};

// Hide an element
function hide (elem: HTMLElement) {
	elem.style.display = 'none';
};