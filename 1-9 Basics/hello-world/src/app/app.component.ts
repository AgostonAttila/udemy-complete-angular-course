import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angular app';

    post = {
        title: "Title",
        isFavorite: true
    }

    //ngIF
    courses = [1, 2];

    //NG Switch case

    viewMode = 'map';


    //ngFor
    coursesObj = [
        { id: 1, name: 'elso' },
        { id: 2, name: 'masodik' },
        { id: 3, name: 'harmadik' }
    ];

    onAdd()
    {
        this.coursesObj.push({ id: 4, name: 'negyedik' });
    }

    onRemove(course) {
        let index = this.coursesObj.indexOf(course);
        this.coursesObj.splice(index,1);
    }

    loadCourses() {
        this.coursesObj = [
            { id: 1, name: 'elso' },
            { id: 2, name: 'masodik' },
            { id: 3, name: 'harmadik' }
        ]
    }

    trackCourses (index, course) {
        return course ? course.id : undefined;
    }

    canSave = true;

}
