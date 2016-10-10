import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero-form/hero-form.component';
import { TodoComponent } from './todo/todo.component';
import { NoContentComponent } from './no-content/no-content.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'hero', component: HeroComponent},
  { path: 'todo', component: TodoComponent},
  { path: '**',    component: NoContentComponent },
];

export const routing = RouterModule.forRoot(routes);
