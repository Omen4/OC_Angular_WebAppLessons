export class AppareilService{

  appareils = [
    {
      name: 'Machine à laver',
      status: 'Off'
    },
    {
      name: 'Télévision',
      status: 'On'
    },
    {
      name: 'Ordinateur',
      status: 'Off'
    }
  ];

  switchOnAll(){
    for(let appareil of this.appareils){
      appareil.status = 'On';
    }
  }

   switchOOffAll(){
    for(let appareil of this.appareils){
      appareil.status = 'Off';
    }
  }


}
