import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperItemComponent } from './super-item.component';

describe('SuperItemComponent', () => {
  let component: SuperItemComponent;
  let fixture: ComponentFixture<SuperItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
