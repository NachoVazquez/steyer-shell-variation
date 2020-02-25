import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'flight-details',
    pathMatch: 'full',
    loadChildren: () =>
      import(
        '@steyer-shell-variation/flight-tracking/feature-flight-details'
      ).then(m => m.FlightTrackingFeatureFlightDetailsModule)
  },
  {
    path: 'flight-search',
    pathMatch: 'full',
    loadChildren: () =>
      import(
        '@steyer-shell-variation/flight-tracking/feature-flight-search'
      ).then(m => m.FlightTrackingFeatureFlightSearchModule)
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class FlightTrackingShellModule {}
