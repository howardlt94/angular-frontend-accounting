import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Workout } from './pages/workout/workout';
import { Diet } from './pages/diet/diet';
import { Contact } from './pages/contact/contact';

@NgModule({
  declarations: [
    App,
    Home,
    About,
    Workout,
    Diet,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
