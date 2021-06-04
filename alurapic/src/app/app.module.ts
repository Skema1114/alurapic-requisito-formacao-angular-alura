import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { PhotoModule } from './photos/photos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PhotoModule, AppRoutingModule, ErrorsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
