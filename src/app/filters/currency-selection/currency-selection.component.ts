import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-currency-selection',
  templateUrl: './currency-selection.component.html',
  styleUrls: ['./currency-selection.component.scss']
})
export class CurrencySelectionComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CurrencySelectionComponent>,
  ) { }

  ngOnInit(): void {
  }

  public closePopUp(): void {
    this.dialogRef.close();
  }

  public enableAppy(): boolean{
    return true;
  }

}
