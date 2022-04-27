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
  @Input() goal: any = 0;
  dataParsed: any = [{}];
  show = false;
  dates: any = [];
  weights: any = [];
  goals: any = [];
  chartOption: EChartsOption = {};

  constructor() { }

  ngOnInit(): void {
    // console.log(`data for ${this.name}: `)
    // console.log(this.data)
    console.log(`goal: ${this.goal}`)
    this.data.forEach(el => {
      this.dataParsed[0][el["date"]] = Math.max(el["pounds"], (this.dataParsed[0][el["date"]] == undefined ? -1 : this.dataParsed[0][el["date"]]))

    })
    Object.keys(this.dataParsed[0]).forEach(key => {
      this.dates.push(key)
      this.weights.push(this.dataParsed[0][key])
    })
    this.goals = Array(this.dates.length).fill(this.goal);
    console.log("goals")
    console.log(this.goals)
    this.show = true;

    this.chartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['Max weight', 'Goal']
      },
      xAxis: [
        {
          type: 'category',
          data: this.dates,
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Max weight',
          axisLabel: {
            formatter: '{value} lbs'
          }
        },
        {
          type: 'value',
          name: 'Goal',
          axisLabel: {
            formatter: '{value} lbs'
          }
        }
      ],
      series: [

        {
          name: 'Goal',
          type: 'bar',
          barGap: '-100%',
          barCategoryGap: '80%',
          // yAxisIndex: 2,
          tooltip: {
            formatter: function (params: any) {
              return params.value + ' lbs';
            }
          },
          // data: Array(Object.keys(this.testData[0]).length).fill(100)
          data: Array(2).fill(this.goal)
        },
        {
          name: 'Max weight',
          type: 'bar',
          // yAxisIndex: 1,
          tooltip: {
            formatter: function (params: any) {
              return params.value + ' lbs';
            }
          },
          // data: Object.values(this.testData[0])
          // data: [150, 160]
          data: this.weights
        },
      ]
    };
  }





}
