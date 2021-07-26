import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  isAuth = false;

  // lastUpdate = new Date();

  lastUpdate = new Promise<Date>((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils: any[] = [];

constructor(private appareilService: AppareilService){
   setTimeout(() => {
     this.isAuth = true;
   }, 4000
  );
 }

 onAllumer(){
  console.log('On allume tout !');
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

}

