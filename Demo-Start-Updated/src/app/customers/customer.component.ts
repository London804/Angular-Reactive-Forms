import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  // this is our data model. It passes data to the backend server
  customer = new Customer();


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    // this is the form model that tracks the value and state
    this.customerForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: {value: 'n/a', disabled: true},
      sendCatalog: true
    })

    // this is the form model that tracks the value and state
    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(true)
    // })
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  populateTestData() {
    this.customerForm.setValue({
      firstName: 'Jack',
      lastName: 'Harkness',
      email: 'jack@torchwood.com',
      sendCatalog: false
    })
  }
}
