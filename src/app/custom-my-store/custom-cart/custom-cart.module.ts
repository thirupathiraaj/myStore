import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule, TranslatePipe } from '@spartacus/core';
import { CustomCartTotalsComponent } from './custom-cart-totals/custom-cart-totals.component';
import { CustomOrderSummaryComponent } from '../custom-order-summary/custom-order-summary.component';
import { ProgressButtonModule } from '@spartacus/storefront';
import { CustomApplyCouponComponent } from '../custom-apply-coupon/custom-apply-coupon.component';
import { CustomCartQuickComponent } from '../custom-cart-quick/custom-cart-quick.component';


@NgModule({
  declarations: [
    CustomCartTotalsComponent,
    CustomOrderSummaryComponent,
  ],
  imports: [
    CommonModule,
    ProgressButtonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CartTotalsComponent: {
          component: CustomCartTotalsComponent
        },
        OrderSummaryComponent: {
          component:CustomOrderSummaryComponent
        },
        CartApplyCouponComponent1: {
          component: CustomApplyCouponComponent
        },
        CartQuickOrderFormComponent: {
          component: CustomCartQuickComponent
        }
      }
    } as CmsConfig)
  ]
})
export class CustomCartModule { }
