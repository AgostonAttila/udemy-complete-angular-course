import { EditCourseComponent } from './edit-course/edit-course.component';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'app works!';

  isChecked = true;

  onChange($event){
    console.log($event)
  }

colors = [
  {Id:1, name:'Red' },
   {Id:2, name:'Green' },
    {Id:3, name:'Blue' }
];

color = 2;

minDate = new Date(2017,1,1);
maxDate = new Date(2017,8,1);

categories = [
  {name:'Begginer'},
  {name:'Middle'},
  {name:'Advenced'}
]


selectCategory(category){
  this.categories.filter(c=>c!=category).forEach(c=>c['selected']= false);

  category.selected= !category.selected
}

progress = 0;
timer;

isLoading=false;

/*
Kell másik is

constructor(){
  //első spinner
//setInterval(()=>{
//this.progress++;
//if(this.progress==100) clearInterval(this.timer)
//},20)

2.
this.isLoading = true;
this.getCourses().subscribe(x=>this.isLoading = false);

} */ 


getCourses(){
  return Observable.timer(2000);
}

constructor(private dialog: MatDialog){

  
}

openDialog(){
this.dialog.open(EditCourseComponent,{
  data:{ courseId :1}
})
.afterClosed()
.subscribe(result=>console.log());

}


}
