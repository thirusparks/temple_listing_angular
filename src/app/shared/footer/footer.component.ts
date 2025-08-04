import { Component } from '@angular/core';
import { SubFooterComponent } from './sub-footer/sub-footer.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SubFooterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
