import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css'],
  template: `
  <div class="demo-layout-transparent mdl-layout mdl-js-layout">
    <header class="mdl-layout__header mdl-layout__header--transparent">
      <div class="mdl-layout__header-row">

        <!-- Title -->
        <span class="mdl-layout-title">Scotch Pets</span>

        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>

        <!-- Navigation with router directives-->
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" [routerLink]="['/technology']">Cats</a>
          <a class="mdl-navigation__link" [routerLink]="['/business']">Dogs</a>
        </nav>
      </div>
    </header>

    <main class="mdl-layout__content">
      <h1 class="header-text">We care about pets...</h1>
    </main>
  </div>

  <!-- Router Outlet -->
  <router-outlet></router-outlet>
`
})
export class AppComponent {
  //constructor(router:Router) {}
  title = 'app works!';
}
