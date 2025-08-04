import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleGridComponent } from './temple-grid.component';

describe('TempleGridComponent', () => {
  let component: TempleGridComponent;
  let fixture: ComponentFixture<TempleGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
