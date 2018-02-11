import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-github-profile',
    templateUrl: './github-profile.component.html',
    styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {


    submit() {
        this.router.navigate(['/followers'], {
            queryParams: {page: 1,order: 'newest'}
        })
    }

    constructor(private route: ActivatedRoute,private router: Router) { }

    ngOnInit() {
        //this.route.paramMap['id'];

        this.route.snapshot.paramMap.get('id');

        //ha el és vissza akar navigálni úgy h megmaradjon
        //this.route.paramMap
        //    .subscribe(params => {
        //        let id = params.get('id');              
        //    });

    }

}
