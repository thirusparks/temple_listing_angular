import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleListingPageComponent } from './temple-listing-page.component';

describe('TempleListingPageComponent', () => {
  let component: TempleListingPageComponent;
  let fixture: ComponentFixture<TempleListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleListingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempleListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
