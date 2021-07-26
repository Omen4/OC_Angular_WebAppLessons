import { JsonPipe } from '@angular/common';
import { Appareil } from 'src/app/core/models/Appareil';

export class AppareilService {
  private _appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'Off',
    },
    {
      id: 2,
      name: 'Télévision',
      status: 'On',
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'Off',
    },
  ];

  getById(id: number): Appareil {
    const appareilTemp: any = this._appareils.find((appareilObject) => {
      return appareilObject.id === id;
    });
    return new Appareil(
      appareilTemp.id,
      appareilTemp.name,
      appareilTemp.status
    );
  }

  getAll(): Appareil[] {
    return this._appareils.map((appareilTemp: any) => {
      return new Appareil(
        appareilTemp.id,
        appareilTemp.name,
        appareilTemp.status
      );
    });
  }

  switchOnAll(): Appareil[] {
    this._appareils.forEach((appareil) => {
      appareil.status = 'On';
    });
    return this.getAll();
  }

  switchOffAll(): Appareil[] {
    for (let appareil of this._appareils) {
      appareil.status = 'Off';
    }
    return this.getAll();
  }

  switchOnOne(appareil: Appareil): Appareil {
    this._appareils[appareil.id].status = 'On';
    return this.getById(appareil.id);
  }

  switchOffOne(appareil: Appareil): Appareil {
    this._appareils[appareil.id].status = 'Off';
    return this.getById(appareil.id);
  }
}
