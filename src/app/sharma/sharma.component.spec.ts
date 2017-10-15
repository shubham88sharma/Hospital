import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharmaComponent } from './sharma.component';

describe('SharmaComponent', () => {
  let component: SharmaComponent;
  let fixture: ComponentFixture<SharmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
