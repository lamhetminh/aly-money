import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  wallets = [
    {
      name: 'Ví',
      type: 'Tiền mặt',
      money: 1000000
    },
    {
      name: 'Vietcombank',
      type: 'Ngân hàng',
      money: 10000000
    },
  ]
  constructor() { }

  spendMoney(walletName: string, money: number): boolean {
    let check: boolean;
    this.wallets.forEach(wallet => {
      if (wallet.name == walletName) {
        if (wallet.money > money) {
          wallet.money -= money;
          check = true;
        } else {
          check = false
        }
      }
    })
    return check
  }
}
