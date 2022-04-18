import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  message: any = null;

  constructor(private alertService: AlertService) {
    this.message = null;
  }

  ngOnInit(): void {
    this.message = null;
    this.subscription = this.alertService.getAlert()
      .subscribe(message => {
        this.message = message;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription != undefined)
      this.subscription.unsubscribe();
  }
}
