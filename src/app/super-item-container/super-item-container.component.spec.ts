import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperItemContainerComponent } from './super-item-container.component';

describe('SuperItemContainerComponent', () => {
  let component: SuperItemContainerComponent;
  let fixture: ComponentFixture<SuperItemContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperItemContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
