import { MatComponentsModule } from './mat-components/mat-components.module';
import { CourseService } from './course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
/*
import {MatCheckboxModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatChipsModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
*/
import { AppComponent } from './app.component';
import { EditCourseComponent, /*DIALOG_DATA*/ } from './edit-course/edit-course.component';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent
  ],
  entryComponents:[
    EditCourseComponent
  ] ,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,    
    HttpModule,
    MatComponentsModule
    /*MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule*/
  ],
  providers: [
    CourseService,
    {provide: CourseService,useClass : CourseService}
   // {provide: DIALOG_DATA ,useValue : {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
