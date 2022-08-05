import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { CustomQuickOrderComponent } from './custom-quick-order/custom-quick-order.component';
import { CustomProdIntroComponent } from './custom-prod-intro/custom-prod-intro.component';
import { StarRatingModule } from '@spartacus/storefront';
import { CustomPdpComponent } from './custom-pdp/custom-pdp.component';
import { CustomQualtricsComponent } from './custom-qualtrics/custom-qualtrics.component';
import { CustomCarasoulComponent } from './custom-carasoul/custom-carasoul.component';
import { CustomApplyCouponComponent } from './custom-apply-coupon/custom-apply-coupon.component';
import { CustomCartQuickComponent } from './custom-cart-quick/custom-cart-quick.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CustomProdIntroComponent,
    CustomPdpComponent,
    CustomQualtricsComponent,
    CustomApplyCouponComponent,
    CustomCartQuickComponent
  ],
  imports: [
    CommonModule,
    StarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent:{
          component: CustomProdIntroComponent
        },
        ProductSummaryComponent: {
        component:CustomPdpComponent
       //  component:()=> import('./custom-product-summary/custom-product-summary.component').then(m=>CustomProductSummaryComponent)
        },
        QuickOrderComponent:{
        component: CustomQuickOrderComponent
      },
      QualtricsEmbeddedFeedbackComponent: {
        component: CustomQualtricsComponent
      },
      QualtricsComponent1: {
        component:CustomCarasoulComponent
      }
      }
    } as CmsConfig)
  ]
})
export class CustomMyStoreModule { }
