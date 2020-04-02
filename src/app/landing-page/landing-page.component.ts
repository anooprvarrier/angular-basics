import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { CurrencySelectionComponent } from '../filters/currency-selection/currency-selection.component';
@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openCurrencyPopUp(): void{
    this.dialog.open(CurrencySelectionComponent,{
      hasBackdrop: false
    });
  }

  public openAnalyzerSetting(): void{

  }

}
