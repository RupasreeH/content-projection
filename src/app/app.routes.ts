import { Routes } from '@angular/router';
import { ContentParentComponent } from './content-parent/content-parent.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'parent',
    component: ContentParentComponent,
  },
  {
    path: 'child',
    component: ContentChildComponent,
  },
];
