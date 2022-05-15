import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService, Review } from '../services/api.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  review: Review[] = [];

  constructor(
    private readonly apiService: APIService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.pathFromRoot[1].params.subscribe(({ movieId }) =>
      this.apiService.getReviewById(movieId).subscribe(({ results }) => {
        this.review = results;
      })
    );
  }
}
