import { Routes } from '@angular/router';
import { TempleListingPageComponent } from '../app/temples/temple-listing-page/temple-listing-page.component';
import { ComingSoonComponent } from './shared/pages/coming-soon/coming-soon.component';

export const routes: Routes = [
    { path: '', component: TempleListingPageComponent },
    {
        path: 'coming-soon',
        loadComponent: () => import('./shared/pages/coming-soon/coming-soon.component')
            .then(m => m.ComingSoonComponent)
    }

];
