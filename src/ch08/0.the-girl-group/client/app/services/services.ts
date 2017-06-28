import { BidService } from './bid.service';
import { IdolService } from './idol.service';
import { WebSocketService } from './websocket.service';

export const ONLINE_IDOL_SERVICES = [
  BidService,
  IdolService,
  WebSocketService
];
