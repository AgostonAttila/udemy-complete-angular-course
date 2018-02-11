import { NgModule } from '@angular/core';

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


@NgModule({
  exports:[
    MatCheckboxModule,
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
    MatDialogModule
  ]
})
export class MatComponentsModule { }
