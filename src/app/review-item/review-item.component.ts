import { Component, Input } from '@angular/core';
import { Review } from '../services/api.service';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss'],
})
export class ReviewItemComponent {
  @Input() review!: Review;
}
