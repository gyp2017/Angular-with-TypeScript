import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'child',
  template: `<div class="wrapper">
              <h2>child</h2>
              <ng-content select=".header"></ng-content>
              <div>This div is defined the Child's</div>
              <ng-content select=".footer"></ng-content>
             </div>`,
  styles: ['.wrapper { background: lightgreen; }'],
  encapsulation: ViewEncapsulation.Native
})
class ChildComponent { }

@Component({
  selector: 'app',
  template: `<div class="wrapper">
               <h1>Parent</h1>
               <div>This div is defined the Parent's</div>
               <child>
                 <div class="header">Child got this header from parent.</div>
                 <div class="footer">Child got this footer from parent.</div>
               </child>
             </div>`,
  styles: ['.wrapper { background: cyan; }'],
  encapsulation: ViewEncapsulation.Native
})
class AppComponent { }


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ChildComponent],
  bootstrap: [AppComponent]
})
class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
