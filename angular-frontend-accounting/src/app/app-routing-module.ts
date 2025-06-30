import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Diet } from './pages/diet/diet';
import { Workout } from './pages/workout/workout';
import { Contact } from './pages/contact/contact';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'diet', component: Diet },
  { path: 'workout', component: Workout },
  { path: 'contact', component: Contact }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
