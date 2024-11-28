import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // Inject the MatSnackBar into here
  constructor(private snackBar: MatSnackBar) { }

  // Create a function to show the message for 5 seconds
  show(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 5000
    });
  }
}
