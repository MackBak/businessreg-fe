import {Component} from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';


@Component({
  selector: 'app-businessoverview',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatIconButton,
    MatIcon,
    MatButton,
    ReactiveFormsModule
  ],
  templateUrl: './businessoverview.component.html',
  styleUrl: './businessoverview.component.css'
})


export class BusinessoverviewComponent {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.searchForm = this.fb.group({
      nameOrId: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const inputValue = this.searchForm.get('nameOrId')?.value;
      const isNumber = !isNaN(inputValue) && inputValue.trim() !== '';
      const params = new HttpParams().set(isNumber ? 'id' : 'name', inputValue);
      console.log('These are the params\n: ' + params)

      this.http.get('http://localhost:8080/api/company/get', {params}).subscribe({
          next: (response) => {
            console.log('Submitting search', response);
          },
          error: (error) => {
            console.error('Error in form', error);
          },
          complete: () => {
            console.log('Get request completed from api/company')
          }
        });
    } else {
      console.error('Search not valid');
    }
  }

} // End of export class


