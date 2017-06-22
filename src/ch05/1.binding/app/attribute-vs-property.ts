import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app',
  template: `
    <h1>Binding</h1>
    <h2>attribute vs property</h2>
    <input [value]="greeting"
           [attr.value]="greeting"
           (input)="onInputEvent($event)">
  `
})
export class AppComponent {
  greeting: string = 'Coooool';

  onInputEvent({ target }) {
    console.log(target.value);
    console.log(target.getAttribute('value'));
    console.log(this.greeting);
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
