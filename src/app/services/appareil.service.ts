export class AppareilService{

  appareils = [
    {
      id:1,
      name: 'Machine à laver',
      status: 'Off'
    },
    {
      id:2,
      name: 'Télévision',
      status: 'On'
    },
    {
      id:3,
      name: 'Ordinateur',
      status: 'Off'
    }
  ];

  getAppareilById(id: number){
     const appareil = this.appareils.find(
       (appareilObject) => {
         return appareilObject.id === id;
       }
     );
     return appareil;
  }

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
