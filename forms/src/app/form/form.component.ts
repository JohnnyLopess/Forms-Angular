import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private router: Router) {}

  onSubmit(form: any) {
    console.log('Formulário enviado:', form.value);
    form.reset(); 
    this.router.navigate(['/confirmation']);
  }
}
