import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


  chartOption: EChartsOption = {
    legend: {
      data: ['achieved', 'goal']
    },
    xAxis: {
      name: 'date',
      nameTextStyle: {
        verticalAlign: "top",
        padding: [15, 0, 0, 0]
      },
      nameLocation: 'middle',
      data: ['2/25', '2/26', '2/27', '2/28', '3/01', '3/02', '3/03'],
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      name: 'weight (lbs)',
      nameLocation: "middle",
      nameTextStyle: {
        verticalAlign: "bottom",
        padding: [0, 0, 15, 0]
      },
      type: 'value',
    },
    series: [
      {
        name: 'goal',
        data: [5, 5, 7, 10, 10, 13, 15],
        type: 'line',
      },
      {
        name: 'achieved',
        data: [7, 7, 10, 11, 12, 15, 15],
        type: 'line',
      }
    ],
  };

  

}
