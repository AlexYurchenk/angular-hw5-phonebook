import { Component, Input } from '@angular/core';
import { Genre } from '../services/api.service';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.scss'],
})
export class GenresListComponent {
  @Input() genres: (Genre | undefined)[] | undefined = [];
}
