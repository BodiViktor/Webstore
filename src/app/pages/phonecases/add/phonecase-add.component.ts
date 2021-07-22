import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-phonecase-add',
  templateUrl: './phonecase-add.component.html',
  styleUrls: ['./phonecase-add.component.scss']
})
export class PhonecaseAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    img: new FormControl(''),
    price: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<PhonecaseAddComponent>) { }

  ngOnInit(): void {
  }

}
