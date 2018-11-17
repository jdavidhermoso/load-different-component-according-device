import {Component, OnInit} from '@angular/core';
import {Item} from '../../models/item.model';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector';
import {ItemsService} from '../../services/items.service';
import {Observable} from 'rxjs';

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
  }

  public ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.itemId) {
        this.item = this.itemsService.getItem();
        this.isInfoPanelOpen = true;
      }
    });
  }

  public closeInfoPanel() {
    this.isInfoPanelOpen = false;
  }

  public openInfoMap() {
    this.isInfoPanelOpen = true;
  }
}
