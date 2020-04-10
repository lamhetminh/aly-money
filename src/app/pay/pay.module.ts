import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayRoutingModule } from './pay-routing.module';
import { PayComponent } from './pay/pay.component';
import { ChartsModule } from 'ng2-charts'


@NgModule({
  declarations: [PayComponent],
  imports: [
    CommonModule,
    PayRoutingModule,
    ChartsModule,
    MaterialModule
  ]
})
export class PayModule { }
