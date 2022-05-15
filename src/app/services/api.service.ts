import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Movie {
  overview: string;
  release_date: string;
  id: number;
  title: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  poster_path: string;
  vote_count: number;
  video: boolean;
  vote_average: number;
  popularity: number;
  media_type: string;
  original_name: string;
  origin_country: string[];
  first_air_date: string;
  name: string;
  genres?: (Genre | undefined)[];
}
export interface Genre {
  id: number;
  name: string;
}
export interface Result {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface FullInformationAboutMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface CastResult {
  id: number;
  cast: Cast[];
  crew: Crew[];
}
export interface AuthorDetails {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
}

export interface Review {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: Date;
  id: string;
  updated_at: Date;
  url: string;
}

export interface ReviewResult {
  id: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private readonly http: HttpClient) {}
  getTrends() {
    return this.http.get<Result>(
      'https://api.themoviedb.org/3/trending/all/day?api_key=44d74a10460e9a32f8546bed31d47780'
    );
  }
  getGenres() {
    return this.http.get<{ genres: Genre[] }>(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=44d74a10460e9a32f8546bed31d47780&language=en-US'
    );
  }
  getMoviesByQuery(q: string) {
    return this.http.get<Result>(
      `https://api.themoviedb.org/3/search/movie?api_key=44d74a10460e9a32f8546bed31d47780&language=en-US&query=${q}&page=1&include_adult=false`
    );
  }
  getMoviesById(id: string) {
    return this.http.get<FullInformationAboutMovie>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=44d74a10460e9a32f8546bed31d47780&language=en-US`
    );
  }
  getCastById(id: string) {
    return this.http.get<CastResult>(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=44d74a10460e9a32f8546bed31d47780&language=en-US`
    );
  }
  getReviewById(id: string) {
    return this.http.get<ReviewResult>(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=44d74a10460e9a32f8546bed31d47780&language=en-US&page=1`
    );
  }
}
