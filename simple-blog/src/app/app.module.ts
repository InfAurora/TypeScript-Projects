import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BlogNavbarComponent } from './blog-navbar/blog-navbar.component';
import { BlogHomePageComponent } from './blog-home-page/blog-home-page.component'

@NgModule({
  declarations: [
    AppComponent,
    BlogNavbarComponent,
    BlogHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
