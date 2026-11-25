import { Component, signal } from '@angular/core';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  template: `<main>
    <header class="brand-name"> 
      <img class="brand-logo" src="/home.svg" alt="logo" aria-hidden="true"  width="25px"/>
      &nbsp;<span>Home</span>
    </header>
    <section class="content">
      <app-home />
    </section>
  </main> `,
  styleUrl: './app.css',
})
export class App {
  title = 'homes';
}
