import { Observable } from 'rxjs/Observable';

export class CustomObservableService {
  createObservableService(): Observable<Date> {
    return new Observable(observer => {
      setInterval(() => {
        observer.next(new Date());
      }, 1000);
    });
  }
}
