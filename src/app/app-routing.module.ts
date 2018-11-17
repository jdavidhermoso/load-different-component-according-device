import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InfoPanelComponent} from './components/info-panel/info-panel.component';
import {MapContainerComponent} from './components/map-container/map-container.component';
import {InfoPanelContainerComponent} from './components/info-panel-container/info-panel-container.component';
import {DeviceGuard} from './guards';

const routes: Routes = [
  {path: 'map', component: MapContainerComponent, pathMatch: 'full'},
  {path: 'item/:itemId', component: InfoPanelContainerComponent, canActivate: [DeviceGuard], pathMatch: 'full'},
  {path: 'map/:itemId', component: MapContainerComponent},
  {redirectTo: 'map', path: '**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
