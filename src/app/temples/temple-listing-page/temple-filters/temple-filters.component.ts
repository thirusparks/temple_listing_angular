import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temple-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temple-filters.component.html',
  styleUrl: './temple-filters.component.scss'
})
export class TempleFiltersComponent {

  allLocations = ['Maharashtra', 'TamilNadu', 'Kerala', 'New Delhi', 'Gujarat', 'Rajasthan', 'Punjab', 'Goa'];
  allMissions = ['Renovation', 'Healthcare', 'Food Offering', 'Education', 'Water Supply', 'Animal Care'];
  allDeities = ['Krishna', 'Shiva', 'Ganesha', 'Muruga', 'Hanuman', 'Durga'];
  showAllLocations = false;
  showAllMissions = false;
  showAllDeities = false;

  get visibleLocations() {
    return this.showAllLocations ? this.allLocations : this.allLocations.slice(0, 4);
  }

  get visibleMissions() {
    return this.showAllMissions ? this.allMissions : this.allMissions.slice(0, 4);
  }

  get visibleDeities() {
    return this.showAllDeities ? this.allDeities : this.allDeities.slice(0, 4);
  }
}
