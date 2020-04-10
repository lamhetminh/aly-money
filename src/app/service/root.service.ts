import { Injectable } from '@angular/core';
import { Bill } from '../interface/interface';
import { ParsedProperty } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  dataBill: Bill[] = [
    {
      type: 'outcome',
      money: 10000,
      date: new Date(),
      wallet: 'Vietcombank',
      tag: 'Sinh hoạt',
      note: 'phai tra'
    },
    {
      type: 'outcome',
      money: 100000,
      date: new Date(),
      wallet: 'Vietcombank',
      tag: 'Khác',
      note: 'phai tra'
    },
    {
      type: 'outcome',
      money: 100000,
      date: new Date(),
      wallet: 'Ví',
      tag: 'Mua sắm',
      note: 'phai tra'
    },
    {
      type: 'outcome',
      money: 50000,
      date: new Date(),
      wallet: 'Ví',
      tag: 'Ăn uống',
      note: 'phai tra'
    },
    {
      type: 'outcome',
      money: 50001,
      date: new Date(),
      wallet: 'Ví',
      tag: 'Ăn uống',
      note: 'phai tra'
    }
  ];
  dataIncome: Bill[] = [
    {
      type: 'income',
      money: 1000000,
      date: new Date(),
      wallet: 'Vietcombank',
      tag: 'Lương',
      note: 'Lương tháng 9'
    },
    {
      type: 'income',
      money: 500000,
      date: new Date(),
      wallet: 'Vietcombank',
      tag: 'Thưởng',
      note: 'Lương tháng 9'
    },
    {
      type: 'income',
      money: 50000,
      date: new Date(),
      wallet: 'Ví',
      tag: 'Cho tặng',
      note: 'Lương tháng 9'
    },
  ]
  outcomeTags = ['Mua sắm', 'Ăn uống', 'Sinh hoạt', 'Giải trí', 'Khác']
  incomeTags = ['Lương', 'Thưởng', 'Kinh doanh', 'Cho tặng', 'Vay mượn'];
  outcomeTagsUsed = [];
  outcomeDataStatistic = [];
  incomeTagsUsed = [];
  incomeDataStatistic = [];
  constructor() { }

  addBill(data: Bill) {
    this.dataBill.push(data)
  }

  addIncome(data: Bill) {
    this.dataIncome.push(data);
  }
  calculateOutcomeMoney() {
    this.outcomeTagsUsed = [];
    this.outcomeDataStatistic = [];
    this.outcomeTags.forEach(tag => {
      let money = 0;
      this.dataBill.forEach(bill => {
        if (bill.tag == tag) {
          money += bill.money
        }
      })
      if (money != 0) {
        this.outcomeTagsUsed.push(tag);
        this.outcomeDataStatistic.push(money)
      }
    })
  }

  calculateIncomeMoney() {
    this.incomeTagsUsed = [];
    this.incomeDataStatistic = [];
    this.incomeTags.forEach(tag => {
      let money = 0;
      this.dataIncome.forEach(bill => {
        if (bill.tag == tag) {
          money += bill.money
        }
      })
      if (money != 0) {
        this.incomeTagsUsed.push(tag);
        this.incomeDataStatistic.push(money)
      }
    })
  }

}
