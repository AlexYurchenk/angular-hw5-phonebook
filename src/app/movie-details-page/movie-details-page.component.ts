import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIService, FullInformationAboutMovie } from '../services/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss'],
})
export class MovieDetailsPageComponent implements OnInit {
  movie!: FullInformationAboutMovie;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly apiService: APIService,
    private readonly location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.apiService.getMoviesById(params['movieId']).subscribe((r) => {
        this.movie = r;
      });
    });
  }
  onGoBackClick() {
    this.location.back();
  }
}
