import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selected-temple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-temple.component.html',
  styleUrl: './selected-temple.component.scss'
})
export class SelectedTempleComponent {

  images = [
    { src: '../../../assets/images/MaduraiTemple.png', alt: 'Madurai', temple: 'Meenakshi Temple' },
    { src: '../../../assets/images/DelhiTemple.png', alt: 'Delhi', temple: 'Akshardham Temple' },
    { src: '../../../assets/images/GujaratTemple.png', alt: 'Gujarat', temple: 'Somnath Temple' }
  ];

  currentIndex = 0;

  showPrev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

}
