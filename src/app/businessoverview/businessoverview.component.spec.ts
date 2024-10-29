import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessoverviewComponent } from './businessoverview.component';

describe('BusinessoverviewComponent', () => {
  let component: BusinessoverviewComponent;
  let fixture: ComponentFixture<BusinessoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessoverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
