import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { observeOn } from 'rxjs-compat/operator/observeOn';
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

  private _getById(id: number): Appareil {
    const appareilTemp: any = this._appareils.find((appareilObject) => {
      return appareilObject.id === id;
    });
    return new Appareil(
      appareilTemp.id,
      appareilTemp.name,
      appareilTemp.status
    );
  }

  // getAll(callback: (appareils: Appareil[]) => void) {
  //   callback(this._getAll());
  // }

  getAll(): Observable<Appareil[]> {
    return obs;
  }

  private _getAll(): Appareil[] {
    return this._appareils.map((appareilTemp: any) => {
      return new Appareil(
        appareilTemp.id,
        appareilTemp.name,
        appareilTemp.status
      );
    });
  }

  private _switchOnAll(): Appareil[] {
    this._appareils.forEach((appareil) => {
      appareil.status = 'On';
    });
    return this._getAll();
  }

  private _switchOffAll(): Appareil[] {
    for (let appareil of this._appareils) {
      appareil.status = 'Off';
    }
    return this._getAll();
  }

  private _switchOnOne(appareil: Appareil): Appareil {
    this._appareils[appareil.id].status = 'On';
    return this._getById(appareil.id);
  }

  private _switchOffOne(appareil: Appareil): Appareil {
    this._appareils[appareil.id].status = 'Off';
    return this._getById(appareil.id);
  }
}
