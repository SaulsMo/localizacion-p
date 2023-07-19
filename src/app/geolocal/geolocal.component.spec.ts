import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocalComponent } from './geolocal.component';

describe('GeolocalComponent', () => {
  let component: GeolocalComponent;
  let fixture: ComponentFixture<GeolocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeolocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeolocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
