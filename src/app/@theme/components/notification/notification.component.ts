import { Component, OnInit } from '@angular/core';
import { NotificationService, Notification } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notifications$.subscribe((notifications) => {
      this.notifications = notifications;
    });
  }

  closeNotification(id?: string) {
    this.notificationService.removeNotification(id);
  }

  getIconClass(notification: Notification): string {
    switch (notification.type) {
      case 'alert':
        return 'fas fa-2x fa-exclamation-circle text-warning';
      case 'info':
        return 'fas fa-2x fa-info-circle text-info';
      case 'success':
        return 'fas fa-2x fa-check-circle text-success';
      case 'error':
        return 'fas fa-2x fa-exclamation-triangle text-danger';
      default:
        return 'fas fa-2x fa-info-circle text-secondary';
    }
  }

  getTypeClass(notification: Notification): string {
    switch (notification.type) {
      case 'alert':
        return 'alert-warning';
      case 'info':
        return 'alert-info';
      case 'success':
        return 'alert-success';
      case 'error':
        return 'alert-danger';
      default:
        return 'alert-secondary';
    }
  }
}
