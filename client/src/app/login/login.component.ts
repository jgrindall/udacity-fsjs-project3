import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


//TODO

import {PostDialogComponent} from '../post-dialog/post-dialog.component';
import {MatDialog} from '@angular/material';

// ... @Component ...
export class DashboardComponent {
  constructor(public auth: AuthService, public dialog: MatDialog, private dataService: DataService) {
  }
  // ... displayedColumns, dataSource, and deletePost ...

  openDialog(): void {
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: 'Add Post'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addPost(result.data);
      this.dataSource = new PostDataSource(this.dataService);
    });
  }
}
