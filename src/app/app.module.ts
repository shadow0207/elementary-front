import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { LandingComponent } from './app/landing/landing.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { ImageclueComponent } from './app/imageclue/imageclue.component';
import {CdkTableModule} from '@angular/cdk/table';
import{ToasterServiceService} from './app/toaster-service.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { LeftsidenavComponent } from './app/leftsidenav/leftsidenav.component';
import { SearchareaComponent } from './app/searcharea/searcharea.component';
import { AnswerareaComponent } from './app/answerarea/answerarea.component';
import { HistorydialogcompComponent } from './app/historydialogcomp/historydialogcomp.component';
import { HintBlogComponent } from './app/hint-blog/hint-blog.component';
import { ProfilenavComponent } from './app/profilenav/profilenav.component';

import{HashLocationStrategy,LocationStrategy} from '@angular/common';
import { PostquerydialogComponent } from './app/postquerydialog/postquerydialog.component';
import { LeaderboardComponent } from './app/leaderboard/leaderboard.component';
import { AnalyticsComponent } from './app/analytics/analytics.component'
import { ClipboardModule } from 'ngx-clipboard';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    ImageclueComponent,
    LeftsidenavComponent,
    SearchareaComponent,
    AnswerareaComponent,
    HistorydialogcompComponent,
    HintBlogComponent,
    ProfilenavComponent,
    PostquerydialogComponent,
    LeaderboardComponent,
    AnalyticsComponent,
    
    
  ],
  imports: [ CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
   
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    ParticlesModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy},ToasterServiceService],
  entryComponents:[HistorydialogcompComponent,PostquerydialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
