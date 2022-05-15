import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService, Cast } from './../services/api.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss'],
})
export class CastComponent implements OnInit {
  cast: Cast[] = [];

  constructor(
    private readonly apiService: APIService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.pathFromRoot[1].params.subscribe(({ movieId }) =>
      this.apiService.getCastById(movieId).subscribe(({ cast }) => {
        this.cast = cast;
      })
    );
  }
}
