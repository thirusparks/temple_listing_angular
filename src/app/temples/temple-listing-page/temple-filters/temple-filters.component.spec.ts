import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleFiltersComponent } from './temple-filters.component';

describe('TempleFiltersComponent', () => {
  let component: TempleFiltersComponent;
  let fixture: ComponentFixture<TempleFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempleFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
