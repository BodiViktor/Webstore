import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Powerbank } from 'src/app/shared/models/powerbank.models';

@Component({
  selector: 'app-powerbank-list',
  templateUrl: './powerbank-list.component.html',
  styleUrls: ['./powerbank-list.component.scss']
})
export class PowerbankListComponent implements OnInit {
  title = "Powerbanks";
  list: Observable<Powerbank[]> | null = null;

  constructor(private service: FbBaseService<Powerbank>, private router: Router) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.list = this.service.get('powerbanks');
  }

  onGetPowerbank(event: Powerbank): void {
    this.router.navigateByUrl('/details/powerbanks/' + event.id);

  }
}
