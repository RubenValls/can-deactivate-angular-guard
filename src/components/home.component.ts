import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="home">
      <h1>¡Bienvenido a la página de inicio!</h1>
      <a routerLink="/form">Ir al Formulario</a>
    </div>
  `,
  styles: [
    `
      .home {
        margin: 20px;
        padding: 20px;
        text-align: center;
      }

      h1 {
        font-size: 24px;
        margin-bottom: 16px;
      }

      a {
        font-size: 16px;
        color: #007bff;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class HomeComponent {}
