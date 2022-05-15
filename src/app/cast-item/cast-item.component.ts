import { Component, Input } from '@angular/core';
import { Cast } from '../services/api.service';

@Component({
  selector: 'app-cast-item',
  templateUrl: './cast-item.component.html',
  styleUrls: ['./cast-item.component.scss'],
})
export class CastItemComponent {
  @Input() person!: Cast;
}
