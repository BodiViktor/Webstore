import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CASES } from 'src/app/shared/database/case.database';
import { Case } from 'src/app/shared/models/case.model';

@Component({
  selector: 'app-phonecase-add',
  templateUrl: './phonecase-add.component.html',
  styleUrls: ['./phonecase-add.component.scss']
})
export class PhonecaseAddComponent implements OnInit {
  cases = CASES;

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    price: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(''),
    cart: new FormControl(false),
    fav: new FormControl(false)
  });
  constructor(public dialogRef: MatDialogRef<PhonecaseAddComponent>) { }

  ngOnInit(): void {
  }
}
