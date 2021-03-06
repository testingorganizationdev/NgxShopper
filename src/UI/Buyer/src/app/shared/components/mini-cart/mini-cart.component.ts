import { Component, Input, OnInit } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { ListLineItem, Order } from '@ordercloud/angular-sdk';
import { AppStateService } from '@app-buyer/shared/services/app-state/app-state.service';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'checkout-mini-cart',
  templateUrl: './mini-cart.component.html',
})
export class MiniCartComponent implements OnInit {
  @Input() popover: NgbPopover;
  lineItems: ListLineItem;
  order: Order;
  maxLines = 5; // Limit the height for UI purposes
  faEllipsisH = faEllipsisH;

  constructor(private appStateService: AppStateService) {}

  ngOnInit() {
    this.lineItems = this.appStateService.lineItemSubject.value;
    this.order = this.appStateService.orderSubject.value;
  }

  close() {
    if (this.popover.isOpen()) {
      this.popover.close();
    }
  }
}
