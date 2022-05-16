import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailwayListComponent } from './railway-list.component';

describe('RailwayListComponent', () => {
  let component: RailwayListComponent;
  let fixture: ComponentFixture<RailwayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RailwayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RailwayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
