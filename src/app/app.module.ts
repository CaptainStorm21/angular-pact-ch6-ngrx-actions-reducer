import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//step 1 + line 18
import { StoreModule } from '@ngrx/store';
// step 8
import * as appStore from './store/app.reducer';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ app: appStore.reducer })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
