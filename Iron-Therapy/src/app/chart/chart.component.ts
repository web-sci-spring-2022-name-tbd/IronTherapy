import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  dummyData = [
    {name:"2022-03-03" , value: 25},
    {name:"2022-03-02" , value: 21},
    {name:"2022-03-01" , value: 20},
    {name:"2022-02-28" , value: 20},
    {name:"2022-02-27" , value: 17},
    {name:"2022-02-26" , value: 15},
    {name:"2022-02-25" , value: 12},
    {name:"2022-02-24" , value: 10},


  ]

  constructor() { }

  ngOnInit(): void {
  }

  

}
