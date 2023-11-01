import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GifFinderModule } from './gif-finder/gif-finder.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, GifFinderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
