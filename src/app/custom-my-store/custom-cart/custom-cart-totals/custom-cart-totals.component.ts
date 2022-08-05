import { Component, OnInit } from '@angular/core';
import { ActiveCartService, Cart, OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-cart-totals',
  templateUrl: './custom-cart-totals.component.html',
  styleUrls: ['./custom-cart-totals.component.scss']
})
export class CustomCartTotalsComponent implements OnInit {

  cart$: Observable<Cart> | any =  this.activeCartService.getActive();
  entries$: Observable<OrderEntry[]> = this.activeCartService.getEntries();
  myEntries: any;

  constructor(protected activeCartService: ActiveCartService) { }

  ngOnInit(): void {
    //this.cart$ = this.activeCartService.getActive();
   // this.entries$ = this.activeCartService.getEntries()
    //  .pipe(filter((entries: string | any[]) => entries.length > 0))
    //  .subscribe((val:any)=>{this.myEntries = val; console.log(val)})
    
  }

}
