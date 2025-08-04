import { Component } from '@angular/core';
import { PreHeaderComponent } from './pre-header/pre-header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PreHeaderComponent, SubHeaderComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
