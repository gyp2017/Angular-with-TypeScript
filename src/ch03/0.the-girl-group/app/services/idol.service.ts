export class Idol {
  constructor(public id: number,
              public name: string,
              public height: number,
              public rating: number,
              public categories: Array<string>,
              public imageURL: string) {
  }
}

export class IdolService {
  getIdols(): Array<Idol> {
    return idols.map(i => new Idol(i.id, i.name, i.height, i.rating, i.categories, i.imageURL));
  }
}

let idols = [
  {
    "id": 0,
    "name": "나연",
    "height": 163,
    "weight": 49,
    "rating": 3,
    "categories": ["electronics", "hardware"],
    "imageURL": "http://az879543.vo.msecnd.net/twice/KakaoTalk_20170515_150117171.jpg"
  },
  {
    "id": 1,
    "name": "정연",
    "birth": "1996년 11월 1일",
    "height": 167,
    "weight": 49,
    "rating": 3,
    "categories": ["electronics", "hardware"],
    "imageURL": "http://az879543.vo.msecnd.net/twice/4(26).jpg"
  },
  {
    "id": 2,
    "name": "모모",
    "birth": "1996년 11월 1일",
    "height": 162,
    "weight": 46,
    "rating": 3,
    "categories": ["electronics", "hardware"],
    "imageURL": "http://az879543.vo.msecnd.net/twice/5(26).jpg"
  },
  {
    "id": 3,
    "name": "사나",
    "birth": "1996년 12월 29일",
    "height": 163,
    "rating": 3,
    "categories": ["electronics", "hardware"],
    "imageURL": "http://az879543.vo.msecnd.net/twice/6(22).jpg"
  }
];
