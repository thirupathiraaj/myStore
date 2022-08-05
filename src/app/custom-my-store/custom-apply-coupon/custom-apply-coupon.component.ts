import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActiveCartService, Cart, CartVoucherService, CustomerCoupon, CustomerCouponSearchResult, CustomerCouponService } from '@spartacus/core';
import { combineLatest, Observable, Subscription } from 'rxjs';
import {map,tap} from 'rxjs/operators'

@Component({
  selector: 'app-custom-apply-coupon',
  templateUrl: './custom-apply-coupon.component.html',
  styleUrls: ['./custom-apply-coupon.component.scss']
})
export class CustomApplyCouponComponent implements OnInit, OnDestroy {

  MAX_CUSTOMER_COUPON_PAGE = 100;
  couponForm!: FormGroup;
  cartIsLoading$: Observable<boolean> | any;
  cart$: Observable<Cart> | any;
  cartId: string | any;
  applicableCoupons: CustomerCoupon[] = [];

  protected ignoreCloseEvent = false;

  protected subscription = new Subscription();

  couponBoxIsActive = false;

  constructor(
    protected cartVoucherService: CartVoucherService,
    protected formBuilder: FormBuilder,
    protected customerCouponService: CustomerCouponService,
    protected activeCartService: ActiveCartService
  ) { }
  

  ngOnInit() {
    if (this.customerCouponService) {
      this.customerCouponService.loadCustomerCoupons(
        this.MAX_CUSTOMER_COUPON_PAGE
      );
}
this.cart$ = combineLatest([
  this.activeCartService.getActive(),
  this.activeCartService.getActiveCartId(),
  this.customerCouponService.getCustomerCoupons(
    this.MAX_CUSTOMER_COUPON_PAGE
  ),
]).pipe(
  tap(
    ([cart, activeCardId, customerCoupons]: [
      Cart,
      string,
      CustomerCouponSearchResult
    ]) => {
      this.cartId = activeCardId;
     // this.getApplicableCustomerCoupons(cart, customerCoupons.coupons?.values);
    }
  ),
  map(([cart]: [Cart, string, CustomerCouponSearchResult]) => cart)
);
  }

  protected getApplicableCustomerCoupons(
    cart: Cart,
    coupons: CustomerCoupon[]
  ): void {
    this.applicableCoupons = coupons || [];
    if (cart.appliedVouchers) {
      cart.appliedVouchers.forEach((appliedVoucher) => {
        this.applicableCoupons = this.applicableCoupons.filter(
          (coupon) => coupon.couponId !== appliedVoucher.code
        );
      });
    }
  }

ngOnDestroy(): void {
  throw new Error('Method not implemented.');
}

}
