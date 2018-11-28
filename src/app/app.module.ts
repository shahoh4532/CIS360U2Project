import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RemindersComponent } from './reminders/reminders.component';
import { ReminderDetailComponent } from './reminder-detail/reminder-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RemindersComponent,
    ReminderDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
