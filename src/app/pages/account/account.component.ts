import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { getAddressForm } from 'src/app/shared/forms/address.form';
import { getPersonForm } from 'src/app/shared/forms/person.form';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  form: FormGroup | null = null;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = getPersonForm();
    const idFormArray = this.form.get('identifier') as FormArray;
    (idFormArray.get([1]) as FormGroup).controls.value.setValue('laki@webkert.com');
  }

  log(): void {
    console.log(this.form?.value);
  }
  get getAddress(): FormArray {
    return this.form?.get('address') as FormArray;
  }

  addAddress() {
    const idFormArray = this.form?.get('address') as FormArray;
    idFormArray.push(getAddressForm());
  }

  removeAddress(index: number): void {
    const formArray = this.form?.get('address') as FormArray;
    formArray.removeAt(index);
  }
}
