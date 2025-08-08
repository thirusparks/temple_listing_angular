import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TempleDetailsDialogComponent } from '../../modals/temple-details-dialog/temple-details-dialog.component';
import { TempleData } from '../../modals/temple-details-dialog/temple-details-dialog.component';
import { TEMPLES } from '../../temple-data';
@Component({
  selector: 'app-temple-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temple-grid.component.html',
  styleUrl: './temple-grid.component.scss'
})
export class TempleGridComponent implements OnChanges, OnInit {
  constructor(private dialog: MatDialog) { }

  @Input() selectedCity: string | null = null;

  currentPage = 1;
  pageSize = 9;
  totalPages = 5;

  temples = TEMPLES;

  filteredTemples = this.temples.slice(0, 9);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCity']) {
      const city = this.selectedCity;
      const filtered = city
        ? this.temples.filter((t: { location: string }) => {
          return t.location === city;
        })
        : this.temples;
      this.filteredTemples = filtered.slice(0, 9);
    }
  }

  ngOnInit() {
    this.totalPages = Math.ceil(this.temples.length / this.pageSize);
    this.updateFilteredTemples();
  }

  get totalPagesArray(): number[] {
    return Array(this.totalPages)
      .fill(0)
      .map((x, i) => i + 1);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updateFilteredTemples();
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateFilteredTemples();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateFilteredTemples();
    }
  }

  updateFilteredTemples() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.filteredTemples = this.temples.slice(start, end);
    this.totalPages = Math.ceil(this.temples.length / this.pageSize);
  }

  openTempleDialog(temple: any) {
    this.dialog.open<TempleDetailsDialogComponent, TempleData>(TempleDetailsDialogComponent, {
      data: {
        name: temple.name,
        description: temple.description,
        address: temple.address,
        timings: temple.timings,
        speciality: temple.speciality
      },
      width: '600px',
      height: 'auto',
      panelClass: 'custom-dialog-container'
    });
  }


}
