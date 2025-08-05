import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temple-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temple-grid.component.html',
  styleUrl: './temple-grid.component.scss'
})
export class TempleGridComponent implements OnChanges {

  @Input() selectedCity: string | null = null;

  temples = [
    {
      name: 'Somnath Temple',
      location: 'Gujarat',
      image: '../../../assets/images/DelhiTemple.png'
    },
    {
      name: 'Golden Temple',
      location: 'Amritsar',
      image: '../../../assets/images/AmritsarTemple.png'
    },
    {
      name: 'Kabaleeshwar Temple',
      location: 'Chennai',
      image: '../../../assets/images/ChennaiTemple.png'
    },
    {
      name: 'Kashi Temple',
      location: 'Varanasi',
      image: '../../../assets/images/VaranasiTemple.png'
    },
    {
      name: 'Jagannath Temple',
      location: 'Puri',
      image: '../../../assets/images/PuriTemple.png'
    },
    {
      name: 'Vaishno Devi',
      location: 'Katra',
      image: '../../../assets/images/KatraTemple.png'
    },
    {
      name: 'Akshardham Temple',
      location: 'New Delhi',
      image: '../../../assets/images/DelhiTemple.png'
    },
    {
      name: 'Brihadeeswarar Temple',
      location: 'Thanjavur',
      image: '../../../assets/images/ThanjavurTemple.png'
    },
    {
      name: 'Tirupati Tirumala',
      location: 'Tirumala',
      image: '../../../assets/images/TirumalaTemple.png'
    },
    {
      name: 'TamilNadu Temple',
      location: 'Chennai',
      image: '../../../assets/images/TamilNadu/Chennai_1.jpg'
    },
    {
      name: 'TamilNadu Temple',
      location: 'Chennai',
      image: '../../../assets/images/TamilNadu/Chennai_2.jpg'
    },
    {
      name: 'TamilNadu Temple',
      location: 'Chennai',
      image: '../../../assets/images/TamilNadu/Chennai_3.jpg'
    },
    {
      name: 'TamilNadu Temple',
      location: 'Chennai',
      image: '../../../assets/images/TamilNadu/Chennai_4.jpg'
    },
    {
      name: 'TamilNadu Temple',
      location: 'Chennai',
      image: '../../../assets/images/TamilNadu/Chennai_5.jpg'
    },
    {
      name: 'TamilNadu Temple',
      location: 'Chennai',
      image: '../../../assets/images/TamilNadu/Chennai_6.jpg'
    },
    {
      name: 'TamilNadu Temple',
      location: 'Chennai',
      image: '../../../assets/images/TamilNadu/Chennai_7.jpg'
    },
    {
      name: 'TamilNadu Temple',
      location: 'Chennai',
      image: '../../../assets/images/TamilNadu/Chennai_8.jpg'
    },
    {
      name: 'TamilNadu Temple',
      location: 'Chennai',
      image: '../../../assets/images/TamilNadu/Chennai_9.jpg'
    },
    {
      name: 'Kerala Temple',
      location: 'Kerala',
      image: '../../../assets/images/Kerala/Kerala_1.jpg'
    },
    {
      name: 'Kerala Temple',
      location: 'Kerala',
      image: '../../../assets/images/Kerala/Kerala_2.jpg'
    },
    {
      name: 'Kerala Temple',
      location: 'Kerala',
      image: '../../../assets/images/Kerala/Kerala_3.jpg'
    },
    {
      name: 'Kerala Temple',
      location: 'Kerala',
      image: '../../../assets/images/Kerala/Kerala_4.jpg'
    },
    {
      name: 'Kerala Temple',
      location: 'Kerala',
      image: '../../../assets/images/Kerala/Kerala_5.jpg'
    },
    {
      name: 'Kerala Temple',
      location: 'Kerala',
      image: '../../../assets/images/Kerala/Kerala_6.jpg'
    },
    {
      name: 'Kerala Temple',
      location: 'Kerala',
      image: '../../../assets/images/Kerala/Kerala_7.jpg'
    },
    {
      name: 'Kerala Temple',
      location: 'Kerala',
      image: '../../../assets/images/Kerala/Kerala_8.jpg'
    },
    {
      name: 'Kerala Temple',
      location: 'Kerala',
      image: '../../../assets/images/Kerala/Kerala_9.jpg'
    }
  ];

  filteredTemples = this.temples.slice(0, 9);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCity']) {
      const city = this.selectedCity;
      const filtered = city
        ? this.temples.filter(t => {
            return t.location === city;
          })
        : this.temples;
      this.filteredTemples = filtered.slice(0, 9);
    }
  }


}
