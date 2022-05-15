import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-list',
  templateUrl: './nav-bar-list.component.html',
  styleUrls: ['./nav-bar-list.component.scss'],
})
export class NavBarListComponent implements OnInit {
  navBarItems: string[] = ['', 'movies'];
  navBarItemsText = ['Home', 'Search'];
  constructor() {}

  ngOnInit(): void {}
}
