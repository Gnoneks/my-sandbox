import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComponentsScreenComponent } from './custom-components-screen.component';

describe('CustomComponentsScreenComponent', () => {
  let component: CustomComponentsScreenComponent;
  let fixture: ComponentFixture<CustomComponentsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomComponentsScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomComponentsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
