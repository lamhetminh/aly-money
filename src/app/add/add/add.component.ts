import { RootService } from './../../service/root.service';
import { Wallet } from './../../interface/interface';
import { WalletService } from './../../service/wallet.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  wallets: Wallet[];
  tags = [];
  type: string;
  constructor(private walletService: WalletService,
    private rootService: RootService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.wallets = this.walletService.wallets;
  }

  selectTags(type: string) {
    this.type = type;
    if (type == 'income') {
      this.tags = this.rootService.incomeTags
    } else if (type == 'outcome') {
      this.tags = this.rootService.outcomeTags
    }
  }
  addBill(form: any) {
    if (this.walletService.spendMoney(form.wallet, form.money)) {
      this.rootService.addBill(form);
      this.router.navigateByUrl('home/preview');
      this._snackBar.open('Thêm thành công', '🍎', {
        duration: 1000,
      });
    } else {
      this._snackBar.open('Số dư tài khoản không đủ', '🍩', {
        duration: 2000,
      });
    }
  }

  addIncome(form: any) {
    this.rootService.addIncome(form);
    this.router.navigateByUrl('home/preview');
    this._snackBar.open('Thêm thành công', '🍎', {
      duration: 1000,
    });
  }
}
