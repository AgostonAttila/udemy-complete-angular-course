import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Observable } from 'rxjs/observable';
//import { AppError } from '../common/app-error';
//import { BadInput } from '../common/bad-input';
//import { NotFoundError } from '../common/not-found-error';
import { DataService } from '../services/data.service';

//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

@Injectable()
export class PostService extends DataService {   
    
    constructor(http: Http) {
        super('http://jsonplaceholder.typicode.com/posts',http);
    }



    //Kivezettük közös DataServicebe
    /*

    constructor(private http: Http) {    }

    getPosts() {
        return this.http.get(this.url)
            .catch(this.handleError);
    }

    createPosts(post) {
        return this.http.post(this.url, JSON.stringify(post))
            //.catch((error: Response) => {
            //    if (error.status === 400)
            //        return Observable.throw(new BadInput(error.json()));

            //    return Observable.throw(new AppError(error));
            //});
            .catch(this.handleError);
    }

    updatePosts(post) {
        return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
            .catch(this.handleError);
    }

    deletePosts(id) {
        return this.http.delete(this.url + '/' + id)
            //.catch((error: Response) => {
            //if (error.status === 404)                  
            //    return Observable.throw(new NotFoundError());

            //return Observable.throw(new AppError(error));
            //});

            .catch(this.handleError);

    }


    private handleError(error: Response) {
        if (error.status === 400)
            return Observable.throw(new BadInput(error.json()));
        if (error.status === 404)
            return Observable.throw(new NotFoundError());

        return Observable.throw(new AppError(error));
    }
    */
}
