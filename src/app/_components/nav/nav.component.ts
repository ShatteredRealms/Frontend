import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isMenuCollapsed: boolean = true;
  links = [
    {title: 'Home', link: '/'},
    {title: 'Login', link: '/login'},
  ];

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  collapseNav(): void {
    this.isMenuCollapsed = true;
  }

}
