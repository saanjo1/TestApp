import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexVendorComponent } from './index-vendor.component';

describe('IndexVendorComponent', () => {
  let component: IndexVendorComponent;
  let fixture: ComponentFixture<IndexVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
