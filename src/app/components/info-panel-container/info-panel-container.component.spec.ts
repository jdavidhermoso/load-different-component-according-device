import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPanelContainerComponent } from './info-panel-container.component';

describe('InfoPanelContainerComponent', () => {
  let component: InfoPanelContainerComponent;
  let fixture: ComponentFixture<InfoPanelContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPanelContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
