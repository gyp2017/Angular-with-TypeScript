import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TemperaturePipe } from './temperature.pipe';

@Component({
  selector: 'app',
  template: `
    <h1>Observable weather</h1>
    <input type="text" value="0" [(ngModel)]="temp">
    <button (click)="toggleFormat()">Toggle Format</button>
    <h3>{{ targetFormat }} this temperature is {{ temp | temperature : format | number: '1.1-2' }}</h3>
  `
})
export class AppComponent {
  temp: number = 0;
  toCelsius: boolean = false;
  targetFormat: string = 'Fahrenheit';
  format: string = 'CtoF';

  toggleFormat() {
    this.toCelsius = !this.toCelsius;
    this.format = this.toCelsius ? 'FtoC' : 'CtoF';
    this.targetFormat = this.toCelsius ? 'Celsius' : 'Fahrenheit';
  }
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TemperaturePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
