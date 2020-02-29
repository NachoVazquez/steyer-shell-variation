import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { TranslocoConfigModule } from '@steyer-shell-variation/shared/utils-transloco-config';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

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
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    TranslocoConfigModule.forRoot(environment.production)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
