import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app',
  template: `
    <h1>Binding</h1>
    <button (click)="flag=!flag">Toggle flag's value</button>
    <p>
      Flag's value: {{ flag }}
    </p>

    <p>
      1 span with *ngIf="flag" : <span *ngIf="flag">Flag is true</span>
    </p>

    <p>
      2 template with [ngIf]="flag" : <ng-template [ngIf]="flag">Flag is true</ng-template>
    </p>

  `
})
export class AppComponent {
  flag: boolean = true;
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
