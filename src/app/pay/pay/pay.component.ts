import { RootService } from './../../service/root.service';
import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/interface/interface';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      position: 'right',
      labels: {
        fontSize: 15
      }
    }
  };
  public chartType = 'pie';
  public chartLegend = true;
  public chartColors: Array<any> = [
    { // all colors in order
      backgroundColor: ['#d13537', '#2ac754', '#e6db0e', '#242ebd', '#da0ced', '#f08707', '#b695f0']
    }
  ]

  public outcomeChartLabels: string[];
  public outcomeChartData = [];
  public incomeChartLabels: string[];
  public incomeChartData = [];

  incomeData: Bill[];
  outcomeData: Bill[];
  constructor(private rootService: RootService) { }

  ngOnInit(): void {
    this.rootService.calculateOutcomeMoney();
    this.rootService.calculateIncomeMoney();
    this.incomeData = this.rootService.dataIncome;
    this.outcomeData = this.rootService.dataBill;
    this.incomeChartLabels = this.rootService.incomeTagsUsed;
    this.incomeChartData.push({ 'data': this.rootService.incomeDataStatistic })
    this.outcomeChartLabels = this.rootService.outcomeTagsUsed;
    this.outcomeChartData.push({ 'data': this.rootService.outcomeDataStatistic })
  }

}
