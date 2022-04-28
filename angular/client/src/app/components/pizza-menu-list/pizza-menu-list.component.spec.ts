import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaMenuListComponent } from './pizza-menu-list.component';

describe('PizzaMenuListComponent', () => {
  let component: PizzaMenuListComponent;
  let fixture: ComponentFixture<PizzaMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaMenuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
