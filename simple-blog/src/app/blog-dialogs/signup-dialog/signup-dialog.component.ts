import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.sass']
})
export class SignupDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitSignup() {
    console.log('I signed up!')
  }

}
