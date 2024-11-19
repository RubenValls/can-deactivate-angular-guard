import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CanComponentDeactivate } from '../guards/can-deactivate.guard';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule, FormsModule],
  template: `
    <div class="form-container">
      <h1>Formulario</h1>
      <form #myForm="ngForm">
        <label for="name">Nombre:</label>
        <input
          id="name"
          name="name"
          [(ngModel)]="name"
          placeholder="Ingresa tu nombre"
        />
      </form>
      <div class="button-group">
        <button (click)="save()">Guardar</button>
        <button routerLink="/home">Ir a Inicio</button>
      </div>
    </div>
  `,
  styles: [
    `
      .form-container {
        margin: 20px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        max-width: 400px;
      }

      h1 {
        font-size: 24px;
        margin-bottom: 16px;
      }

      label {
        font-size: 14px;
        margin-bottom: 8px;
        display: block;
      }

      input {
        width: 100%;
        padding: 8px;
        font-size: 14px;
        margin-bottom: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      .button-group {
        display: flex;
        justify-content: space-between;
      }

      button {
        padding: 8px 16px;
        font-size: 14px;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        background-color: #007bff;
        color: white;
      }

      button:hover {
        background-color: #0056b3;
      }
    `,
  ],
})
export class FormComponent implements CanComponentDeactivate {
  name = '';
  isSaved = false;

  save(): void {
    this.isSaved = true;
    alert('¡Datos guardados con éxito!');
  }

  canDeactivate(): boolean {
    if (!this.isSaved) {
      return confirm(
        'Tienes cambios sin guardar. ¿Estás seguro de que deseas salir?'
      );
    }
    return true;
  }
}
