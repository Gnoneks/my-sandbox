import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidLinkScreenComponent } from './invalid-link-screen.component';

describe('InvalidLinkScreenComponent', () => {
  let component: InvalidLinkScreenComponent;
  let fixture: ComponentFixture<InvalidLinkScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidLinkScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvalidLinkScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
