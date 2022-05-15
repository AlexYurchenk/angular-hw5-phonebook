import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsPageComponent } from './movie-details-page/movie-details-page.component';
import { CastComponent } from './cast/cast.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContainerComponent } from './container/container.component';
import { IconComponent } from './icon/icon.component';
import { LogoComponent } from './logo/logo.component';
import { NavBarListComponent } from './nav-bar-list/nav-bar-list.component';
import { NavBarListItemComponent } from './nav-bar-list-item/nav-bar-list-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MoviesTrendsComponent } from './movies-trends/movies-trends.component';
import { HttpClientModule } from '@angular/common/http';
import { GenresListComponent } from './genres-list/genres-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { CastItemComponent } from './cast-item/cast-item.component';
import { ReviewItemComponent } from './review-item/review-item.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MovieDetailsPageComponent,
    CastComponent,
    ReviewsComponent,
    ContainerComponent,
    IconComponent,
    LogoComponent,
    MoviesTrendsComponent,
    NavBarListComponent,
    NavBarListItemComponent,
    MovieItemComponent,
    GenresListComponent,
    MoviesPageComponent,
    MovieListComponent,
    CastItemComponent,
    ReviewItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
