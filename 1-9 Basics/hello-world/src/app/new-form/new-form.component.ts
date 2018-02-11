import { Component, } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-new-form',
    templateUrl: './new-form.component.html',
    styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        contact: new FormGroup({
            email: new FormControl(),
            phone: new FormControl()
        }),
        topics: new FormArray([])
    });

    //rovidebb
    //form;
    //constructor(fb: FormBuilder) {
    //   this.form = fb.group({
    //        name: ['', Validators.required],
    //        contact: fb.group({
    //            email: [],
    //            phone: []
    //        }),
    //        topics: fb.array([])
    //    })
    //}


    addTopic(topic: HTMLInputElement) {
        //(this.form.get('topics') as FormArray).push(new FormControl(topic.value));
        this.topics.push(new FormControl(topic.value));
        topic.value = '';
    }

    get topics() {
        return this.form.get('topics') as FormArray;
    }

    removeTopic(topic: FormControl) {
        let index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
    }

}
