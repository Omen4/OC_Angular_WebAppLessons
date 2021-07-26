import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  appareils: any[] = [];

  // lastUpdate = new Date();

  lastUpdate = new Promise<Date>((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });


  constructor(private appareilService: AppareilService){
    setTimeout(() => {
      this.isAuth = true;
    }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
    console.log(this.appareils);
  }

  onAllumer(){
    this.appareilService.switchOnAll()
    console.log('onAllumer');
  }

  onEteindre(){
    if(confirm('Are you sure you wanna switch all your things off?')){
      this.appareilService.switchOffAll();
    }else{
      return;
    }
    console.log('onEteindre');
  }

}
