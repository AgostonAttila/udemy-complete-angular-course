import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
    form = new FormControl({
        account: new FormControl({
            //username: new FormControl('', Validators.required), 1db
            username: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                UsernameValidators.shoulBeUniqe
            UsernameValidators.cannotContainSpace
            ]),
            password: new FormControl('', Validators.required)
        })        
    });


    //kevesebb
    get username() {
        return this.form.get('account.username');
    }

    login() {
        //let isValid = authService.login(this.form.value);
        //if (!isValid) {
        //    //this.usernam.errors
        //    this.form.setErrors({
        //        invalidLogin: true
        //    })
        //}

        this.form.setErrors({
            invalidLogin: true
        });
    }

}
