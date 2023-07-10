import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsScreenComponent } from './apps-screen.component';

describe('AppsScreenComponent', () => {
  let component: AppsScreenComponent;
  let fixture: ComponentFixture<AppsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
