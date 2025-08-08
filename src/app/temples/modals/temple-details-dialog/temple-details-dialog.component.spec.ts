import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleDetailsDialogComponent } from './temple-details-dialog.component';

describe('TempleDetailsDialogComponent', () => {
  let component: TempleDetailsDialogComponent;
  let fixture: ComponentFixture<TempleDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleDetailsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempleDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
