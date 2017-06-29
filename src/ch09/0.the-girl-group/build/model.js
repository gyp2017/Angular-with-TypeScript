"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Idol = (function () {
    function Idol(id, name, nation, height, rating, categories, imgURL) {
        this.id = id;
        this.name = name;
        this.nation = nation;
        this.height = height;
        this.rating = rating;
        this.categories = categories;
        this.imgURL = imgURL;
    }
    return Idol;
}());
exports.Idol = Idol;
var Review = (function () {
    function Review(id, idolId, timestamp, user, rating, comment) {
        this.id = id;
        this.idolId = idolId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.comment = comment;
    }
    return Review;
}());
exports.Review = Review;
function getIdols(params) {
    if (params === void 0) { params = {}; }
    var result = idols;
    if (params.name) {
        result = result.filter(function (i) { return i.name.indexOf(params.name) !== -1; });
    }
    if (parseInt(params.height) && result.length > 0) {
        result = result.filter(function (i) { return i.height > parseInt(params.height); });
    }
    if (params.category && params.category > 0 && result.length > 0) {
        result = result.filter(function (i) { return i.categories.indexOf(params.category) !== -1; });
    }
    return result;
}
exports.getIdols = getIdols;
function getIdolById(idolId) {
    return idols.find(function (i) { return i.id === idolId; });
}
exports.getIdolById = getIdolById;
function getReviewsByIdolId(idolId) {
    return reviews.filter(function (r) { return r.idolId === idolId; });
}
exports.getReviewsByIdolId = getReviewsByIdolId;
var idols = [
    {
        id: 1,
        name: '나연',
        nation: 'ko',
        height: 163,
        weight: 48,
        imgURL: './app/images/1.jpg',
        rating: 1,
        categories: ['JYP'],
        nicnames: ['맏내', '과즙녀', '나롬', '나부기', '나숭']
    },
    {
        id: 2,
        name: '정연',
        nation: 'ko',
        height: 167,
        weight: 49.1,
        imgURL: './images/2.jpg',
        rating: 1,
        categories: ['JYP'],
        nicnames: ['타조', '유또검', '유또막', '유깡패']
    },
    {
        id: 3,
        name: '모모',
        nation: 'jp',
        height: 162,
        imgURL: './images/3.jpg',
        rating: 1,
        categories: ['JYP'],
        nicnames: ['모모링', '모구리']
    },
    {
        id: 4,
        name: '사나',
        nation: 'jp',
        height: 163,
        imgURL: './images/4.jpg',
        rating: 1,
        categories: ['JYP'],
        nicnames: ['4차원 엉뚱 소녀', '사나 없이 사나 마나', '큐티섹시', '일이삼사나']
    },
    {
        id: 5,
        name: '지효',
        nation: 'ko',
        height: 160,
        weight: 50,
        imgURL: './images/5.jpg',
        rating: 1,
        categories: ['JYP'],
        nicnames: ['갓지효', '10년차 연습생', '마이크']
    },
    {
        id: 6,
        name: '미나',
        nation: 'jp',
        height: 165,
        weight: 46,
        imgURL: './images/6.jpg',
        rating: 1,
        categories: ['JYP'],
        nicnames: ['다크 섹시', '블랙 스완', '펭귄', '미땅', '매혹의 발레리나', '샤론']
    },
    {
        id: 7,
        name: '다현',
        nation: 'ko',
        height: 160,
        weight: 46,
        imgURL: './images/7.jpg',
        rating: 1,
        categories: ['JYP'],
        nicnames: ['두부', '시한폭탄 예능 유망주', '독수리녀', '독다', '흥 많은 두부']
    },
    {
        id: 8,
        name: '채영',
        nation: 'ko',
        height: 159,
        weight: 46,
        imgURL: './images/8.jpg',
        rating: 1,
        categories: ['JYP'],
        nicnames: ['챙', '아기맹수', '손화백', '째용이', '챙카소', '노잼동생']
    },
    {
        id: 9,
        name: '쯔위',
        nation: 'tw',
        height: 172,
        weight: 52,
        imgURL: './images/9.jpg',
        rating: 1,
        categories: ['JYP'],
        nicnames: ['요다', '주희', '자유', '샐리(Sally)']
    }
];
var reviews = [
    {
        "id": 0,
        "idolId": 1,
        "timestamp": "2014-05-20T02:17:00+00:00",
        "user": "User 1",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 1,
        "idolId": 1,
        "timestamp": "2014-05-20T02:53:00+00:00",
        "user": "User 2",
        "rating": 3,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 2,
        "idolId": 2,
        "timestamp": "2014-05-20T05:26:00+00:00",
        "user": "User 3",
        "rating": 4,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 3,
        "idolId": 2,
        "timestamp": "2014-05-20T07:20:00+00:00",
        "user": "User 4",
        "rating": 4,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 4,
        "idolId": 3,
        "timestamp": "2014-05-20T11:35:00+00:00",
        "user": "User 5",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 5,
        "idolId": 3,
        "timestamp": "2014-05-20T11:42:00+00:00",
        "user": "User 6",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    }
];
