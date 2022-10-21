import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreamListComponent } from './cream-list/cream-list.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { CartComponent } from './cart/cart.component';
import { BodycreamAboutComponent } from './bodycream-about/bodycream-about.component';
import { BodycreamCreamsComponent } from './bodycream-creams/bodycream-creams.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreamListComponent,
    BodycreamAboutComponent,
    BodycreamCreamsComponent,
    CartComponent,
    InputIntegerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
