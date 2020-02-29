import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TranslocoConfigModule } from '@steyer-shell-variation/shared/utils-transloco-config';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: 'booking',
    loadChildren: () =>
      import('@steyer-shell-variation/booking/shell').then(
        m => m.BookingShellModule
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
