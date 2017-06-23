import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, Input, OnChanges, SimpleChange, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

interface IChanges {
  [key: string]: SimpleChange
}

@Component({
  selector: 'child',
  template: `<div class="wrapper">
              <h2>child</h2>
              <div>Greeting: {{greeting}}</div>
              <div>User name: {{user.name}}</div>
              <div>Message: <input [(ngModel)]="message"></div>
             </div>`,
  styles: ['.wrapper { background: lightgreen; }']
})
class ChildComponent {
  @Input() greeting: string;
  @Input() user: { name: string };
  message: string = 'Initial message';
  ngOnChanges(changes: IChanges) {
    console.log(JSON.stringify(changes, null, 2));
  }
}

@Component({
  selector: 'app',
  template: `<div class="wrapper">
               <h1>Parent</h1>
               <div>Greeting: <input type="text" [value]="greeting" (input)="greeting=$event.target.value"></div>
               <div>User name: <input type="text" [value]="user.name" (input)="user.name=$event.target.value"></div>
               <child [greeting]="greeting" [user]="user"></child>
             </div>`,
  styles: ['.wrapper { background: cyan; }']
})
class AppComponent {
  greeting: string = 'Hello';
  user: { name: string } = { name: 'John' };
}


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ChildComponent],
  bootstrap: [AppComponent]
})
class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
