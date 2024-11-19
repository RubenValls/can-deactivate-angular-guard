import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  RouterModule,
  withComponentInputBinding,
} from '@angular/router';
import { FormComponent } from './components/form.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { HomeComponent } from './components/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideRouter(
      [
        {
          path: 'form',
          component: FormComponent,
          canDeactivate: [CanDeactivateGuard],
        },
        { path: 'home', component: HomeComponent },
        { path: '', redirectTo: '/form', pathMatch: 'full' },
      ],
      withComponentInputBinding()
    ),
  ],
});
