import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeItemsComponent } from './free-items.component';

describe('FreeItemsComponent', () => {
  let component: FreeItemsComponent;
  let fixture: ComponentFixture<FreeItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
