import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Injectable()
export class DeviceGuard implements CanActivate {

  constructor(private deviceDetector: DeviceDetectorService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const isDesktop = this.deviceDetector.isDesktop();

    if (isDesktop) {
      this.router.navigate([`/map/${route.params.itemId}`]);
    }

    return !isDesktop;
  }
}
