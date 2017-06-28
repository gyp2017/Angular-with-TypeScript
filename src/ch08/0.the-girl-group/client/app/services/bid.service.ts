import { Injectable } from '@angular/core';
import { WebSocketService } from './websocket.service';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class BidService {
  constructor(private webSocket: WebSocketService) {}

  wetchIdol(idolId: number): Observable {
    let openSubscriber = Subscriber.create(() => this.webSocket.send({ idolId }));

    return this.webSocket.createObservableSocket('ws://localhost:8000', openSubscriber)
                         .map(message => JSON.parse(message));
  }
}
