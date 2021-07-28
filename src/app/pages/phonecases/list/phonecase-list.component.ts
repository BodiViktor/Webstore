import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { PhonecaseAddComponent } from '../add/phonecase-add.component';
import { Case } from './../../../shared/models/case.model';

@Component({
  selector: 'app-phonecase-list',
  templateUrl: './phonecase-list.component.html',
  styleUrls: ['./phonecase-list.component.scss']
})
export class PhonecaseListComponent implements OnInit {
  title = "Phonecases";
  list$: Observable<Case[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['one', 'two', 'three']
  filteredOptions$: Observable<string[]> | null = null;

  constructor(private service: FbBaseService<Case>, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
    this.filteredOptions$ = this.myControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map(value => this._filter(value))
      )
  }

  get(): void {
    this.list$ = this.service.get('phonecases');
  }

  onGetPhonecase(event: Case): void {
    this.router.navigateByUrl('/details/phonecases/' + event.id);
    console.log(event);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PhonecaseAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((result: Case) => {
      console.log(result);
      if (result?.name) {
        this.service.add('phonecases', result);
      }
    }, err => {
      console.warn(err);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue))
  };
}
