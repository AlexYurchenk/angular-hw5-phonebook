import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from './../services/api.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  @Input() movie!: Movie;
  constructor(private readonly router: Router) {}
  onMovieClick(e: Event) {
    this.router.navigate([`movies/${(<HTMLDivElement>e.currentTarget).id}`]);
  }
}
