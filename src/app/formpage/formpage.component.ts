import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, Form} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-formpage',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formpage.component.html',
  styleUrl: './formpage.component.css'
})

export class FormpageComponent {
  businessForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.businessForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(45)]],
      owner: ['', [Validators.required, Validators.maxLength(45)]],
      address: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(150)]],
      email: ['', [Validators.required, Validators.maxLength(45)]],
      companyType: ['', [Validators.required, Validators.maxLength(45)]],
      startDate: ['', Validators.required],
    })
  }

  onSubmit() {
    if (this.businessForm.valid) {
      const formData = this.businessForm.value;
      console.log(formData)
      this.http.post('http://localhost:8080/api/company/create', formData).subscribe((response) => {
          console.log('Form Submitted', response);
        },
        (error) => {
          console.error('Error in form', error)
        });
    } else {
      console.error('Form not valid!')
    }
  }

}
