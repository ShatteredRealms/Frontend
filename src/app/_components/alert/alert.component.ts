import {Component, OnInit} from '@angular/core';
import {MdbNotificationRef} from 'mdb-angular-ui-kit/notification';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  message: string | null = null;
  closeable: boolean = true;
  color: 'primary' |
    'secondary' |
    'success' |
    'danger' |
    'warning' |
    'info' |
    'light' |
    'dark' = 'primary';
  fade: boolean = false;
  persist: boolean = false;

  constructor(
    public notificationRef: MdbNotificationRef<AlertComponent>,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    if (!this.persist) {
      this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          this.notificationRef.close();
        }
      });
    }
  }


  getHTMLClasses(): string {
    let classes = `alert alert-${this.color} show`;

    if (this.closeable) classes += ' alert-dismissible'
    if (this.fade) classes += ' fade'

    return classes;
  }
}
