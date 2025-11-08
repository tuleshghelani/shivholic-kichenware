import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactForm: FormGroup;
  formSubmitted = false;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(1000)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      this.formSubmitted = false;

      const emailData = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message
      };

      this.emailService.sendEmail(emailData).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.success) {
            this.formSubmitted = true;
            this.contactForm.reset();
            // Hide success message after 5 seconds
            setTimeout(() => {
              this.formSubmitted = false;
            }, 5000);
          } else {
            this.errorMessage = response.message || 'Failed to send email. Please try again.';
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = 'An error occurred while sending your message. Please try again later.';
          console.error('Email submission error:', error);
        }
      });
    }
  }
}
