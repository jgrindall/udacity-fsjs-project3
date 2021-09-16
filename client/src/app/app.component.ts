import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

//https://material.angular.io/components/categories

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple shop';

  constructor(public dialog: MatDialog) {

  }
}
