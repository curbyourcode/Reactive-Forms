import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Type } from '../interfaces/Type';
@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent {
  types: Type[] = [
    { value: true, display: 'Income' },
    { value: false, display: 'Rent' },
    { value: false, display: 'Transportation' },
    { value: false, display: 'Cable/Internet' },
    { value: false, display: 'Food' },
    { value: false, display: 'Electrical' },
    { value: false, display: 'Cell phone' },
  ];

  constructor() { }

  entryForm = new FormGroup({
    description: new FormControl(''),
    isExpense: new FormControl(''),
    value: new FormControl(''),
  });
}
