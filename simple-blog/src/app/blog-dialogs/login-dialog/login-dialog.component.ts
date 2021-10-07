import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.sass']
})
export class LoginDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitLogin() {
    console.log('I am logged in!');
  }

}
