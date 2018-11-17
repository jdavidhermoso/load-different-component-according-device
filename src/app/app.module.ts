import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapContainerComponent} from './components/map-container/map-container.component';
import {InfoPanelComponent} from './components/info-panel/info-panel.component';
import {InfoPanelContainerComponent} from './components/info-panel-container/info-panel-container.component';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {DeviceGuard} from './guards';

@NgModule({
  declarations: [
    AppComponent,
    MapContainerComponent,
    InfoPanelComponent,
    InfoPanelContainerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [DeviceGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
