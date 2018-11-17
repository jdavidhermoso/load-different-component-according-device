import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent {
  @Input()
  public item: Item;

  @Output()
  public onInfoPanelClose: EventEmitter<any> = new EventEmitter<any>();


  public closeInfoPanel() {
    this.onInfoPanelClose.emit();
  }
}
