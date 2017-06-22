export class Idol {
  constructor(public id: number,
              public name: string,
              public nation: string,
              public height: number,
              public rating: number,
              public categories: Array<string>,
              public imgURL: string) {
  }
}

export class Review {
  constructor(public id: number,
              public idolId: number,
              public timestamp: Date,
              public user: string,
              public rating: number,
              public comment: string) {
  }
}

export class IdolService {
  getIdols(): Array<Idol> {
    return idols.map(i => new Idol(i.id, i.name, i.nation, i.height, i.rating, i.categories, i.imgURL));
  }

  getIdolById(idolId: number): Idol {
    // let idol = idols.find(i => i.id === idolId);
    // return new Idol(idol.id, idol.name, idol.nation, idol.height, idol.rating, idol.categories, idol.imgURL);
    return idols.find(i => i.id === idolId);
  }

  getReviwsForIdol(idolId: number): Review[] {
    return reviews.filter(r => r.idolId === idolId)
                  .map(r => new Review(r.id, r.idolId, new Date(r.timestamp), r.user, r.rating, r.comment));
  }
}

let idols = [
  {
    id: 1,
    name: '나연',
    nation: 'ko',
    height: 163,
    weight: 48,
    imgURL: './images/1.jpg',
    rating: 1,
    categories: ['맏내', '과즙녀', '나롬', '나부기', '나숭']
  },
  {
    id: 2,
    name: '정연',
    nation: 'ko',
    height: 167,
    weight: 49.1,
    imgURL: './images/2.jpg',
    rating: 1,
    categories: ['타조', '유또검', '유또막', '유깡패']
  },
  {
    id: 3,
    name: '모모',
    nation: 'jp',
    height: 162,
    imgURL: './images/3.jpg',
    rating: 1,
    categories: ['모모링', '모구리']
  },
  {
    id: 4,
    name: '사나',
    nation: 'jp',
    height: 163,
    imgURL: './images/4.jpg',
    rating: 1,
    categories: ['4차원 엉뚱 소녀', '사나 없이 사나 마나', '큐티섹시', '일이삼사나']
  },
  {
    id: 5,
    name: '지효',
    nation: 'ko',
    height: 160,
    weight: 50,
    imgURL: './images/5.jpg',
    rating: 1,
    categories: ['갓지효', '10년차 연습생', '마이크']
  },
  {
    id: 6,
    name: '미나',
    nation: 'jp',
    height: 165,
    weight: 46,
    imgURL: './images/6.jpg',
    rating: 1,
    categories: ['다크 섹시', '블랙 스완', '펭귄', '미땅', '매혹의 발레리나', '샤론']
  },
  {
    id: 7,
    name: '다현',
    nation: 'ko',
    height: 160,
    weight: 46,
    imgURL: './images/7.jpg',
    rating: 1,
    categories: ['두부', '시한폭탄 예능 유망주', '독수리녀', '독다', '흥 많은 두부']
  },
  {
    id: 8,
    name: '채영',
    nation: 'ko',
    height: 159,
    weight: 46,
    imgURL: './images/8.jpg',
    rating: 1,
    categories: ['챙', '아기맹수', '손화백', '째용이', '챙카소', '노잼동생']
  },
  {
    id: 9,
    name: '쯔위',
    nation: 'tw',
    height: 172,
    weight: 52,
    imgURL: './images/9.jpg',
    rating: 1,
    categories: ['요다', '주희', '자유', '샐리(Sally)']
  }
];


let reviews = [
	{
		"id" : 0,
		"idolId" : 1,
		"timestamp" : "2014-05-20T02:17:00+00:00",
		"user" : "User 1",
		"rating" : 5,
		"comment" : "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
	},
	{
		"id" : 1,
		"idolId" : 1,
		"timestamp" : "2014-05-20T02:53:00+00:00",
		"user" : "User 2",
		"rating" : 3,
		"comment" : "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
	},
	{
		"id" : 2,
		"idolId" : 2,
		"timestamp" : "2014-05-20T05:26:00+00:00",
		"user" : "User 3",
		"rating" : 4,
		"comment" : "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
	},
	{
		"id" : 3,
		"idolId" : 2,
		"timestamp" : "2014-05-20T07:20:00+00:00",
		"user" : "User 4",
		"rating" : 4,
		"comment" : "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
	},
	{
		"id" : 4,
		"idolId" : 3,
		"timestamp" : "2014-05-20T11:35:00+00:00",
		"user" : "User 5",
		"rating" : 5,
		"comment" : "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
	},
	{
		"id" : 5,
		"idolId" : 3,
		"timestamp" : "2014-05-20T11:42:00+00:00",
		"user" : "User 6",
		"rating" : 5,
		"comment" : "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
	}
];
