import { Component } from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

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
      businessSearch: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const searchData = this.searchForm.value;
      console.log(searchData)
      // TODO: Call Api and get from server.
    }
  }

}
