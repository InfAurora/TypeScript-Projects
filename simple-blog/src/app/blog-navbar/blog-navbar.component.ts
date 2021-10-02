import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../blog-dialogs/login-dialog/login-dialog.component';

@Component({
  selector: 'app-blog-navbar',
  templateUrl: './blog-navbar.component.html',
  styleUrls: ['./blog-navbar.component.sass']
})
export class BlogNavbarComponent implements OnInit {
  value = "";
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.value = "";
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent);
  }
}
