import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-list-item',
  templateUrl: './nav-bar-list-item.component.html',
  styleUrls: ['./nav-bar-list-item.component.scss'],
})
export class NavBarListItemComponent {
  @Input() value!: string;
  @Input() text!: string;
}
