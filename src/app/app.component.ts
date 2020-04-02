import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string;
  constructor(
  ) { }
  ngOnInit() {
    this.initialize();
  }
  private initialize(): void {
    this.title = 'Angular basics';
  }
}
