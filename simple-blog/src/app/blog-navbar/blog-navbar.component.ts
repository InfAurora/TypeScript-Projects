import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-navbar',
  templateUrl: './blog-navbar.component.html',
  styleUrls: ['./blog-navbar.component.sass']
})
export class BlogNavbarComponent implements OnInit {
  value = "";
  constructor() { }

  ngOnInit(): void {
    this.value = "";
  }

}
