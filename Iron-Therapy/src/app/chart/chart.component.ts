import { Component, OnInit, Input } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() name: string = "graph -1";
  @Input() data: any = [{
      "Pounds": 10,
      "Reps": 5
    },
      {
        "Pounds": 15,
        "Reps": 5
      },
      {
        "Pounds": 10,
        "Reps": 5
      }];
  dataParsed = [
    [10, 5],
    [15, 6],
    [17, 5]
  ];

  constructor() {
    // this.data.forEach((workout: any) => {
    //   this.dataParsed.push([workout["Pounds"], workout["Reps"]])
    // })
  }

  ngOnInit(): void {
    this.parseChart(this.data);
  }

  parseChart(data: any) {

  }


  chartOption: EChartsOption = {
    xAxis: {},
    yAxis: {},
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params) {
        let data = JSON.parse(JSON.stringify(params));
        return `<span><b>Weight:</b>  ${data["value"][0]}</span> <br/><span><b>Reps:</b>  ${data["value"][1]}</span>`;
      }
    },
    series: [
      {
        symbolSize: 20,
        data: this.dataParsed,
        type: 'scatter'
      }
    ]
  };



}


// chartOption: EChartsOption = {
//   legend: {
//     top:10,
//     data: ['achieved', 'goal']
//   },
//   xAxis: {
//     name: 'date',
//     nameTextStyle: {
//       verticalAlign: "top",
//       padding: [15, 0, 0, 0]
//     },
//     nameLocation: 'middle',
//     data: ['2/25', '2/26', '2/27', '2/28', '3/01', '3/02', '3/03'],
//     axisTick: {
//       alignWithLabel: true
//     }
//   },
//   yAxis: {
//     name: 'weight (lbs)',
//     nameLocation: "middle",
//     nameTextStyle: {
//       verticalAlign: "bottom",
//       padding: [0, 0, 15, 0]
//     },
//     type: 'value',
//   },
//   series: [
//     {
//       name: 'goal',
//       data: [5, 5, 7, 10, 10, 13, 15],
//       type: 'line',
//     },
//     {
//       name: 'achieved',
//       data: [7, 7, 10, 11, 12, 15, 15],
//       type: 'line',
//     }
//   ],
// };
