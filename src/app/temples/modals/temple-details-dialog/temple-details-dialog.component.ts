import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface TempleData {
  name: string;
  description: string;
  address: string;
  timings: string;
  speciality: string;
}

@Component({
  selector: 'app-temple-detail-dialog',
  templateUrl: './temple-details-dialog.component.html',
  styleUrls: ['./temple-details-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatButtonModule]
})
export class TempleDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TempleDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TempleData
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}



