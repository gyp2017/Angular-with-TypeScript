import { Injectable, EventEmitter } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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

export interface IdolSearchParams {
  title : string;
  minPrice : number;
  maxPrice : number;
}

@Injectable()
export class IdolService {
  searchEvent: EventEmitter = new EventEmitter();

  constructor(private http: Http) {}

  getIdols(): Observable<Idol[]> {
    return this.http.get('/idols')
                    .map(response => response.json());
  }

  getIdolById(idolId: number): Observable<Idol> {
    return this.http.get(`/idols/${idolId}`)
                    .map(response => response.json());
  }

  getReviwsForIdol(idolId: number): Observable<Review[]> {
    return this.http.get(`/idols/${idolId}/reviews`)
                    .map(response => response.json())
                    .map(reviews => reviews.map(
                      (r: any) => new Review(
                        r.id,
                        r.idolId,
                        new Date(r.timestamp),
                        r.user,
                        r.rating,
                        r.comment
                      )
                    ));
  }

  search(params: IdolSearchParams): Observable<Idol[]> {
    return this.http.get('/idols', { search: encodeParams(params) })
                    .map(response => response.json());
  }

  getAllCategories(): string[] {
    return ['JYP', 'SM', 'YG'];
  }
}

function encodeParams(params: any): URLSearchParams {
  const queryStr = new URLSearchParams();

  if (params.name !== null && params.name !== '') {
    queryStr.append('name', params.name);
  }

  if (params.height !== null) {
    queryStr.append('height', params.height);
  }

  if (params.category !== null) {
    queryStr.append('category', params.category);
  }

  return queryStr;
}
