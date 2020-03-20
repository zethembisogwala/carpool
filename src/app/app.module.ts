import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { TabsComponent } from './tabs/tabs/tabs.component';
import { TravelComponent } from './tabs/tabs/travel/travel.component';
import { DrivingComponent } from './tabs/tabs/driving/driving.component';
import { HikingComponent } from './tabs/tabs/hiking/hiking.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ThreadComponent } from './messaging/thread/thread.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TravelComponent,
    DrivingComponent,
    HikingComponent,
    ThreadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [
  	MatDatepickerModule,
    MatNativeDateModule,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
