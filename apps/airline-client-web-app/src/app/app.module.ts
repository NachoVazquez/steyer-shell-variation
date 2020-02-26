import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'flight-tracking',
    loadChildren: () =>
      import('@steyer-shell-variation/flight-tracking/shell').then(
        m => m.FlightTrackingShellModule
      )
  },
  {
    path: 'check-in',
    loadChildren: () =>
      import('@steyer-shell-variation/check-in/shell').then(
        m => m.CheckInShellModule
      )
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
