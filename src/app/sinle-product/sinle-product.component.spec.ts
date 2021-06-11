import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinleProductComponent } from './sinle-product.component';

describe('SinleProductComponent', () => {
  let component: SinleProductComponent;
  let fixture: ComponentFixture<SinleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinleProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
