import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temple-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temple-filters.component.html',
  styleUrl: './temple-filters.component.scss'
})
export class TempleFiltersComponent {
  @Output() locationSelected = new EventEmitter<string>();
  @Output() locationCleared = new EventEmitter<void>();

  allLocations = ['Chennai', 'Kerala'];
  allMissions = ['Renovation', 'Healthcare', 'Food Offering', 'Education', 'Water Supply', 'Animal Care'];
  allDeities = ['Krishna', 'Shiva', 'Ganesha', 'Muruga', 'Hanuman', 'Durga'];
  showAllLocations = false;
  showAllMissions = false;
  showAllDeities = false;
  
  selectedLocation: string | null = null;

  get visibleLocations() {
    return this.showAllLocations ? this.allLocations : this.allLocations.slice(0, 4);
  }

  get visibleMissions() {
    return this.showAllMissions ? this.allMissions : this.allMissions.slice(0, 4);
  }

  get visibleDeities() {
    return this.showAllDeities ? this.allDeities : this.allDeities.slice(0, 4);
  }

  selectLocation(city: string) {
    if (this.selectedLocation === city) {
      // If the same location is clicked again, clear the selection
      this.selectedLocation = null;
      this.locationCleared.emit();
    } else {
      // Select the new location
      this.selectedLocation = city;
      this.locationSelected.emit(city);
    }
  }
}
