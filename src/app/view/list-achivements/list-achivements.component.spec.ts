import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAchivementsComponent } from './list-achivements.component';

describe('ListAchivementsComponent', () => {
  let component: ListAchivementsComponent;
  let fixture: ComponentFixture<ListAchivementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAchivementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAchivementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
