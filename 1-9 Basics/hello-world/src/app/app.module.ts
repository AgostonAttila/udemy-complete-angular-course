import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';

import { CoursesService } from './courses.service';

import { SummaryPipe } from './summary.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewFormComponent } from './new-form/new-form.component';
import { PostsComponent } from './posts/posts.component';

import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from '../app/common/app-error-handler';

import { PostService } from './services/post.service';

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        SignupFormComponent,
        CourseComponent,
        SummaryPipe,
        ContactFormComponent,
        NewFormComponent,
        PostsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule

    ],
    providers: [
        PostService,
        Http,
        CoursesService,
        { provide: ErrorHandler ,useClass: AppErrorHandler }
        //AuthorsServic
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
