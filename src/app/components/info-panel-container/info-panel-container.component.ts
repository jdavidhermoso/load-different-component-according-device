import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../../services';
import {Observable} from 'rxjs';
import {Item} from '../../models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info-panel-container',
  templateUrl: './info-panel-container.component.html',
  styleUrls: ['./info-panel-container.component.css']
})
export class InfoPanelContainerComponent implements OnInit {
  public item: Observable<Item>;

  constructor(private itemsService: ItemsService, private router: Router) {
    console.log('InfoPanelContainerComponent');
  }

  ngOnInit() {
    this.item = this.itemsService.getItem();
  }

  onCloseInfoPanel() {
    this.router.navigate(['map']);
  }
}
