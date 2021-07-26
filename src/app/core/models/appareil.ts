export class Appareil {
  private _id: number;
  private _name: string;
  private _status: string;

  constructor(id: number, name: string, status: string) {
    this._id = id;
    this._name = name;
    this._status = status;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get status(): string {
    return this._status;
  }
  public set status(value: string) {
    this._status = value;
  }
}
