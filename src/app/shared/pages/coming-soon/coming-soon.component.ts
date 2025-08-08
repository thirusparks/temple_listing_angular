import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {
  section: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.section = params['section'] || '';
    });
  }

}
