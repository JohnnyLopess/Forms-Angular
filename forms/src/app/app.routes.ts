import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

export const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'confirmation', component: ConfirmationComponent }
];
