import { Component, OnInit } from '@angular/core';
// import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// @Component({
//   imports: [
//     HomeComponent,
//   ],
//   template: `
//   <main>
//     <header class="brand-name">
//       <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
//     </header>
//     <section class="content">
//       <app-home></app-home>
//     </section>
//   </main>
// `,
//   })
export class AppComponent {
  title = 'Hello in main project';
}
