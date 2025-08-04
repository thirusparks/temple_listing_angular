import { Component } from '@angular/core';
import { TempleFiltersComponent } from '../temple-listing-page/temple-filters/temple-filters.component';
import { SelectedTempleComponent } from '../temple-listing-page/selected-temple/selected-temple.component';
import { TempleGridComponent } from '../temple-listing-page/temple-grid/temple-grid.component';

@Component({
  selector: 'app-temple-listing-page',
  standalone: true,
  imports: [TempleFiltersComponent, SelectedTempleComponent, TempleGridComponent],
  templateUrl: './temple-listing-page.component.html',
  styleUrl: './temple-listing-page.component.scss'
})
export class TempleListingPageComponent {

}
