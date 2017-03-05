import { BothviewComponent }  from './app/both-view/bothview.component';
import { SinglemapComponent } from './app/single-map/singlemap.component';
import { SingletableComponent } from './app/single-table/singletable.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '',            component: BothviewComponent },
  {path: 'map',      component: SinglemapComponent},
  {path: 'all',           component: BothviewComponent },
  {path: 'table',    component: SingletableComponent},
  {path: '*',           component: BothviewComponent }
];
