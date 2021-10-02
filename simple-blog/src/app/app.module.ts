import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog'

import { AppComponent } from './app.component';
import { BlogNavbarComponent } from './blog-navbar/blog-navbar.component';
import { BlogHomePageComponent } from './blog-home-page/blog-home-page.component'
import { FormsModule } from '@angular/forms';
import { LoginDialogComponent } from './blog-dialogs/login-dialog/login-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    BlogNavbarComponent,
    BlogHomePageComponent,
    LoginDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
