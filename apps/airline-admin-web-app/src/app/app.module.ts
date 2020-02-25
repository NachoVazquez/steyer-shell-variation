import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookingShellModule } from '@steyer-shell-variation/booking/shell';
import { CheckInShellModule } from '@steyer-shell-variation/check-in/shell';
import { FlightTrackingShellModule } from '@steyer-shell-variation/flight-tracking/shell';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BookingShellModule,
    CheckInShellModule,
    FlightTrackingShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
