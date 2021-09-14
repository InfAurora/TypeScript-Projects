import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <!-- mat-toolbar needs to be refactored to be its own component so it can be reusable -->
  <header>
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <mat-toolbar id="navbar" color="primary">
      <div id="nav-title">Jose's Blog</div>
      <div id="nav-content">
        <a href="">Home</a>
        <a href="">Login</a>
        <a href="">Profile</a>
        <input type="text" placeholder="Search..">
      </div>
    </mat-toolbar>
  </header>
`,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'simple-blog';
}