import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData = {
    name: '',
    email: ''
  };
  
  formErrors = {
    name: '',
    email: ''
  };

  validationMessages = {
    name: {
      required: 'Nome é obrigatório.',
      minlength: 'Nome deve ter pelo menos 3 caracteres.'
    },
    email: {
      required: 'Email é obrigatório.',
      email: 'Por favor informe um email válido.'
    }
  };

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Formulário enviado:', form.value);
      form.reset();
      this.router.navigate(['/confirmation']);
    } else {
      this.validateForm(form);
    }
  }

  validateForm(form: NgForm): void {
    Object.keys(form.controls).forEach(key => {
      const control = form.controls[key];
      this.formErrors[key as keyof typeof this.formErrors] = '';
      
      if (control && !control.valid && (control.dirty || control.touched)) {
        const messages = this.validationMessages[key as keyof typeof this.validationMessages];
        for (const errorKey in control.errors) {
          if (messages[errorKey as keyof typeof messages]) {
            this.formErrors[key as keyof typeof this.formErrors] += messages[errorKey as keyof typeof messages] + ' ';
          }
        }
      }
    });
  }
  
  onValueChanged(form: NgForm): void {
    if (!form) return;
    this.validateForm(form);
  }
}
