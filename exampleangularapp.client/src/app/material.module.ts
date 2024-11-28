import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatTableModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
