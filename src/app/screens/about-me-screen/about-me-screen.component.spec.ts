import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeScreenComponent } from './about-me-screen.component';

describe('AboutMeScreenComponent', () => {
  let component: AboutMeScreenComponent;
  let fixture: ComponentFixture<AboutMeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
