import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCartComponent } from './print-cart.component';

describe('PrintCartComponent', () => {
  let component: PrintCartComponent;
  let fixture: ComponentFixture<PrintCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
