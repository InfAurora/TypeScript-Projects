import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!DOCTYPE html>
  <html lang="en">
    <!-- header -->
    <app-header></app-header>

    <!-- navBar -->
    <app-navbar></app-navbar>

    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>

    <!-- main -->
    <!-- -->
    <body>
  
    </body>
    <router-outlet></router-outlet>
    <app-component></app-component>

    <!-- footer -->
    <app-footer></app-footer>
    </html>
    
    
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'simple-blog';
}