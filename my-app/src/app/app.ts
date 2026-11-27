import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  template: `<main>
    <header class="brand-name">
      <a [routerLink]="['/']">
        <img class="brand-logo" src="/home.svg" alt="logo" width="25" />
      </a>
      <a [routerLink]="['/login']">Login</a>
    </header>

    <section class="content">
      <router-outlet />
    </section>
  </main> `,
  styleUrl: './app.css',
})
export class App {
  title = 'homes';
}
