import { Component, OnInit, Input } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() name: string = "";
  @Input() data: any[] = [];
  dataParsed: any = [];
  show = false;

  constructor() { }

  ngOnInit(): void {
    // console.log(`data for ${this.name}: `)
    // console.log(this.data)
    this.data.forEach(el => {
      // this.dataParsed.push([el["pounds"], el["reps"]])
      // this.dataParsed.push([el["pounds"], el["reps"], el["date"]])
      this.dataParsed.push([el["date"], el["pounds"], el["reps"]]);
    })
    this.show = true;
    // console.log(this.dataParsed)


  }

  chartOption: EChartsOption = {
    xAxis: {
      type:'category'
    },
    yAxis: {},
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params) {
        let data = JSON.parse(JSON.stringify(params));
        // console.log(params)
        // return `<span><b>Weight:</b>${data["value"][0]} lbs</br<span> <br/><span><b>Reps:</b>  ${data["value"][1]}</span>`;
        // return `<span>${data["value"][2]}</span><br/><span><b>Weight:</b>${data["value"][0]} lbs</brspan> <br/><span><b>Reps:</b>  ${data["value"][1]}</span>`;
        return `<span><b>Date:</b> ${data["value"][0]}</span><br/><span><b>Weight:</b>${data["value"][1]} lbs</brspan> <br/><span><b>Reps:</b>  ${data["value"][2]}</span>`;

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



}
