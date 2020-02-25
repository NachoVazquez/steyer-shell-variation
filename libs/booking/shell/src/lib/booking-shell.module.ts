import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'seat-listing',
    pathMatch: 'full',
    loadChildren: () =>
      import('@steyer-shell-variation/booking/feature-seat-listing').then(
        m => m.BookingFeatureSeatListingModule
      )
  },
  {
    path: 'passenger-info',
    pathMatch: 'full',
    loadChildren: () =>
      import('@steyer-shell-variation/booking/feature-passenger-info').then(
        m => m.BookingFeaturePassengerInfoModule
      )
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class BookingShellModule {}
