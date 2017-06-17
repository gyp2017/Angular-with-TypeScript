class Idol {
  constructor(public name: string, private _weight?: number) {
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }
}

let idol = new Idol('쯔위', 52);
idol.weight = 51;

console.log(`${idol.name}, ${idol.weight}`);
