import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-pre-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pre-header.component.html',
  styleUrl: './pre-header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PreHeaderComponent {
  constructor(private router: Router) {}

  navigateToComingSoon(section: string): void {
    this.router.navigate(['/coming-soon'], {
      queryParams: { section }
    });
  }

}
