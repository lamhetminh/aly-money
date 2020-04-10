import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'wallet',
        loadChildren: () => import('../wallet/wallet.module').then((m) => m.WalletModule),
      },
      {
        path: 'pay',
        loadChildren: () => import('../pay/pay.module').then((m) => m.PayModule),
      },
      {
        path: 'add',
        loadChildren: () => import('../add/add.module').then((m) => m.AddModule),
      },
      {
        path: 'plan',
        loadChildren: () => import('../plan/plan.module').then((m) => m.PlanModule),
      },
      {
        path: 'preview',
        loadChildren: () => import('../preview/preview.module').then((m) => m.PreviewModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
