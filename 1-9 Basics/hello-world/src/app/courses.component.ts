import { CoursesService } from './courses.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'courses',
    //template: '<h2>"Title: " + {{title}}</h2>'
    template: `
    <h2>{{getTitle()}}</h2>
    <!--<h2>[textContent]="title"</h2> uaz-->

    {{text2 | summary}}

    <ul>
      <li *ngFor="let course of courses">
          {{course}}
      </li>
    </ul>

    <img src="{{imgUrl}}"/>
  <!--  <img [src]="title"/> uaz-->

     <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>

    <div (click)="onDivCLick()">
      <button (click)="onSave($event)"></button>
    </div>

    <button class="btn btn-primary" [class.active]="isActive"  [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>


<input (keyup)="onKeyUp($event)"/>
<input (keyup.enter)="onKeyUp2()"/>

<input #email (keyup.enter)="onKeyUp3($email.value)"/>

<input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp4()"/>

<input [(ngModel)]="email" (keyup.enter)="onKeyUp4()"/>
    `
})
export class CoursesComponent {
   
    email="me@example.com";

    text2 = "sadasd ahdjda ahsdjkh jashdjk jkasdhkhdsakd askjdh jkashdkjashd kjashdkjah dsjk";
    
    isActive = true; //Class binding
    //Style binding
    title = "List of Courses";
    imgUrl = "";
    colSPan = 2;//Attr binding

    getTitle() {
        return this.title;
    }

    courses;

    onSave($event) {
        $event.stopPropagation();//not bubble up  ekkor  adiv clickje nem fut le csak a gombbé
        console.log("Clicked",$event);
    }

    onDivClick() {       
        console.log("Clicked Div");
    }

    onKeyUp($event) {
         if ($event.keyCode === 13) console.log("ENTER was pressed");
    }

    onKeyUp2() {
        console.log("ENTER was pressed");
    }

    onKeyUp3(email) {
        console.log(email);
    }

    onKeyUp4() {
        console.log(this.email);
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

}
