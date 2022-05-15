import { Component, OnInit } from '@angular/core';
import { APIService, Movie } from '../services/api.service';

@Component({
  selector: 'app-movies-trends',
  templateUrl: './movies-trends.component.html',
  styleUrls: ['./movies-trends.component.scss'],
})
export class MoviesTrendsComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private readonly apiService: APIService) {}

  ngOnInit(): void {
    this.apiService.getTrends().subscribe(({ results }) => {
      this.apiService.getGenres().subscribe(({ genres }) => {
        results = results.map((m) => {
          m.genres = m.genre_ids
            .map((id) => genres.find((g) => g.id === id))
            .slice(0, 2);
          return m;
        });
        console.log(results);
        this.movies = [...results];
      });
    });
  }
}
