import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'check-in-info',
    pathMatch: 'full',
    loadChildren: () =>
      import('@steyer-shell-variation/check-in/feature-check-in-info').then(
        m => m.CheckInFeatureCheckInInfoModule
      )
  },
  {
    path: 'ticket-finder',
    pathMatch: 'full',
    loadChildren: () =>
      import('@steyer-shell-variation/check-in/feature-ticket-finder').then(
        m => m.CheckInFeatureTicketFinderModule
      )
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CheckInShellModule {}
