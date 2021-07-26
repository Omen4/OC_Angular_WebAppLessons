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
    this.appareils.forEach(appareil => {
      appareil.status = 'On';
      console.log(appareil.name);
    });
  }

  switchOffAll(){
    for(let appareil of this.appareils){
      appareil.status = 'Off';
      console.log(appareil.name);
    }
  }

  switchOnOne(index:number){
    this.appareils[index].status = 'On';
  }

  switchOffOne(index:number){
    this.appareils[index].status = 'Off';
  }

}
