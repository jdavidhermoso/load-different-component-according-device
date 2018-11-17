import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapContainerComponent } from './components/map-container/map-container.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MapContainerComponent,
    InfoPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
