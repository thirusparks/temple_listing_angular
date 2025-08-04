import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temple-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temple-grid.component.html',
  styleUrl: './temple-grid.component.scss'
})
export class TempleGridComponent {

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
  }
];


}
