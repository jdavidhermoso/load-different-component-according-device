import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector';
import {Observable} from 'rxjs';

import {Item} from '../../models';
import {ItemsService} from '../../services';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css']
})
export class MapContainerComponent implements OnInit {
  public item: Observable<Item>;
  public isInfoPanelOpen: boolean;
  public isDesktop: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private deviceDetector: DeviceDetectorService,
              private itemsService: ItemsService) {
    this.isDesktop = this.deviceDetector.isDesktop();

    console.log('MapContainerComponent');
  }

  public ngOnInit() {
    this.item = this.itemsService.getItem();

    this.activatedRoute.params.subscribe((params) => {
      if (params.itemId) {
        this.isInfoPanelOpen = true;
      }
    });
  }

  public toggleInfoPanel(state: boolean) {
    this.isInfoPanelOpen = state;
  }
}
