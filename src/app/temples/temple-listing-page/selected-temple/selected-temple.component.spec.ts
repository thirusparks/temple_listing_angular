import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTempleComponent } from './selected-temple.component';

describe('SelectedTempleComponent', () => {
  let component: SelectedTempleComponent;
  let fixture: ComponentFixture<SelectedTempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedTempleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
