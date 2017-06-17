class Twice extends Idol {
  group: string;

  constructor(name: string, _weight: number, group: string) {
    super(name, _weight);
    this.group = group;
  }
}
