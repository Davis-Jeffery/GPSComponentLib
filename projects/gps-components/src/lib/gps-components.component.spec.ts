import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsComponentsComponent } from './gps-components.component';

describe('GpsComponentsComponent', () => {
  let component: GpsComponentsComponent;
  let fixture: ComponentFixture<GpsComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
