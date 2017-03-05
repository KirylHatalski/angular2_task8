import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const template = require('./app.template.html');

@Component({
  selector: 'my-app',
  template: template,
})

export class AppComponent implements OnInit{
  constructor(
    private router: Router
  ){
  }

  private links: string[] = [
    'map',
    'table'
  ];

  ngOnInit() {
    this.router.events.subscribe((event) => {
    })
  }

  gotoRoute(route: string): void {
    this.router.navigate([`/${route}`]);
  }

}
