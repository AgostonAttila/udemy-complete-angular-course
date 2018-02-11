import { Component, OnInit } from '@angular/core';
//import { Http } from '@angular/http';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    private url = 'http://jsonplaceholder.typicode.com/posts';
    posts: any[];


    //LifeCycle Hook
    ngOnInit() {

        //normal posttal

        //this.http.get(this.url)
        //    .subscribe(response => {
        //        //console.log(response);
        //        this.posts = response.json();
        //    });

        //with service

        this.service.getAll()
            .subscribe(posts => this.posts = posts);

        //.subscribe(response => {              
        //    this.posts = response.json();
        //}
        //kivezettük globálisba
        //,error => {
        //    alert('unexpected error occured');
        //    console.log(error);}
        //);
    }

    //GET
    constructor(private service: PostService) {
        //constructor(private http: Http) {
        //http.get(this.url)
        //    .subscribe(response => {
        //        //console.log(response);
        //        this.posts = response.json();
        //    });
    }

    //POST
    createPost(input: HTMLInputElement) {
        let post = { title: input.value }
        this.posts.splice(0, 0, post);

        input.value = '';

        // normal
        //this.http.post(this.url, JSON.stringify(post))
        //    .subscribe(response => {
        //        //console.log(response);
        //        post['id'] = response.json().id;
        //        this.posts.splice(0, 0, post);
        //    });

        //Service
        this.service.create(post)
            .subscribe(newPost => {
                //console.log(response);
                post['id'] = newPost.id;
                //Optimistic update miatt
                //this.posts.splice(0, 0, post);
            },
            //.subscribe(response => {
            //    //console.log(response);
            //    post['id'] = response.json().id;
            //    this.posts.splice(0, 0, post);
            //},
            //(error: Response) => {

            //    if (error.status === 400) {
            //        //this.form.setErrors(error.json())
            //    }
            //    else {
            //        alert('unexpected error occured');
            //        console.log(error);
            //    }

            (error: AppError) => {
                this.posts.splice(0, 1);//optimistic miatt

                if (error instanceof BadInput) { //this.form.setErrors(error.originalError)
                }
                else {
                    //globális lett
                    //alert('unexpected error occured');
                    //console.log(error);
                    throw error;
                }

            });
    }

    //UPDATE
    updatePost(post) {
        //this.http.patch or put
        //this.http.patch(this.url, JSON.stringify({ isRead: true })) csak egy részét kell, jó ha csak egy kis részét kell
        //this.http.put(this.url, JSON.stringify(post)) egészet felkell

        //this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
        this.service.update(post)
            .subscribe(updatedPost => {
                console.log(updatedPost);
            }
            //.subscribe(response => {
            //    console.log(response.json());
            //}
            //, error => {
            //    alert('unexpected error occured');
            //    console.log(error);
            //}
            )
    }

    //DELETE
    deletePost(post) {
        //this.http.delete(this.url + '/' + post.id)

        //Optimistic
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);

        this.service.delete(post.id)
            .subscribe(
            //() => {
            //let index = this.posts.indexOf(post);
            //this.posts.splice(index, 1);
            //},
            null,
            //.subscribe(response => {
            //    let index = this.posts.indexOf(post);
            //    this.posts.splice(index, 1);
            //},
            //ha itt kezelem
            //(error: Response) => {
            //    if (error.status === 404)
            //        alert('already deleted');
            //    else {
            //        alert('unexpected error occured');
            //        console.log(error);
            //    }

            //új errorkezelés
            (error: AppError) => {

                this.posts.splice(index, 0, post);

                if (error instanceof NotFoundError)
                    alert('already deleted');
                else {
                    //globális lett
                    //alert('unexpected error occured');
                    //console.log(error);
                    throw error;
                }

            });
    }


    deletePostPromise(post) {      
        this.service.delete(post.id);
    }


}
