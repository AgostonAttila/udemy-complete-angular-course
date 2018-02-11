import { Component ,OnDestroy} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  courses$ : FirebaseListObservable<any[]>;
   course$;
   author$;
  courses: any[];
  subscription: Subscription;


 constructor(private db : AngularFireDatabase){
 this.courses$ = db.list('/courses');   

this.course$ =db.object('/courses/1');

this.author$ =db.object('/authors/1');

  }


  add(course : HTMLInputElement){
this.courses$.push(course.value);
course.value ='';
  }

update(course){
  this.db.object('/courses'+course.$key)
  //.set(course.$value+ 'UPDATED'); helyettesítve lesz teljesen
   .update(course.$value+ 'UPDATED');//csak ha létezik akkor updateli ha nincs akkor hozzáadja
}

delete(course){
 this.db.object('/courses'+course.$key)
 .remove()
 .then(x=> console.log('DELETED');
 //.catch()
 );


}


/*
  constructor(db : AngularFireDatabase){
 this.subscription = db.list('/courses')
    .subscribe(courses =>{
       this.courses = courses;
      console.log(this.courses);
    })
  }
  
ngOnDestroy(){
this.subscription.unsubscribe();
}
*/

}
