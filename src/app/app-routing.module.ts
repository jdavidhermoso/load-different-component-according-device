import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MapContainerComponent, InfoPanelComponent, InfoPanelContainerComponent} from './components';
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
