import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { Movie } from './../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
})
export class MoviesPageComponent implements OnInit {
  query: string = '';
  movies: Movie[] = [];
  constructor(
    private readonly apiService: APIService,
    private readonly activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((r) => {
      if (!r['query']) {
        return;
      }
      this.apiService.getMoviesByQuery(r['query']).subscribe(({ results }) => {
        this.apiService.getGenres().subscribe(({ genres }) => {
          results = results.map((m) => {
            m.genres = m.genre_ids
              .map((id) => genres.find((g) => g.id === id))
              .slice(0, 2);
            return m;
          });
          this.movies = [...results];
        });
      });
    });
  }
  onSubmit(e: Event) {
    e.preventDefault();
    if (this.query === '') {
      return alert('Please, fill in the form ');
    }
    this.apiService.getMoviesByQuery(this.query).subscribe(({ results }) => {
      this.apiService.getGenres().subscribe(({ genres }) => {
        results = results.map((m) => {
          m.genres = m.genre_ids
            .map((id) => genres.find((g) => g.id === id))
            .slice(0, 2);
          return m;
        });
        this.movies = [...results];
        this.query = '';
      });
    });
  }

  onChange(e: Event) {
    this.query = (<HTMLInputElement>e.target).value;
  }
}
