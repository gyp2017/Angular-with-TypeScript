import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app',
  template: `
    <h1>Observable weather</h1>
    <input type="text" [formControl]="searchInput">
    <h3>{{ temperature }}</h3>
  `
})
export class AppComponent {
  private baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private urlSuffix : string = '&units=metric&appid=ca3f6d6ca3973a518834983d0b318f73';

  searchInput: FormControl = new FormControl();
  temperature: string;

  constructor(private http: Http) {
    this.searchInput.valueChanges
        .debounceTime(300)
        .switchMap(city => this.getWeather(city))
        .subscribe(
          res => {
            this.temperature = `Temp: ${res['main'].temp}, humidity: ${res['main'].humidity}`;
          },
          err => console.log('Cant not get weather'),
          () => console.log('weath is retrieved')
        );
  }

  getWeather(city: string): Observable<Array<string>> {
    return this.http.get(this.baseURL + city + this.urlSuffix)
                    .map(res => {
                      console.log(res.json());
                      return res.json();
                    })
                    .catch(err => {
                      if (err.status === 404) {
                        console.log(`Not found: ${city}`);
                        return Observable.of();
                      }
                    });
  }
}

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
