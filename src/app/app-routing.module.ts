import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastComponent } from './cast/cast.component';
import { MovieDetailsPageComponent } from './movie-details-page/movie-details-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { MoviesTrendsComponent } from './movies-trends/movies-trends.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesTrendsComponent,
  },
  {
    path: 'movies',
    component: MoviesPageComponent,
  },
  {
    path: 'movies/:movieId',
    component: MovieDetailsPageComponent,
    children: [
      {
        path: 'cast',
        component: CastComponent,
      },
      {
        path: 'reviews',
        component: ReviewsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
