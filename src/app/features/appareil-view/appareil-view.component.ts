import { Component, OnInit } from '@angular/core';
import { Appareil } from 'src/app/core/models/Appareil';
import { AppareilService } from '../../shared/repositories/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss'],
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  appareils: Appareil[] = [];

  lastUpdate = new Promise<Date>((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    // this.appareils = this.appareilService.appareils;
    this.appareilService.getAll((data: Appareil[]) => {
      this.appareils = data;
    });
  }

  onAllumer() {
    this.appareilService.switchOnAll();
    console.log('onAllumer');
  }

  onEteindre() {
    if (confirm('Are you sure you wanna switch all your things off?')) {
      this.appareilService.switchOffAll();
    } else {
      return;
    }
    console.log('onEteindre');
  }
}
