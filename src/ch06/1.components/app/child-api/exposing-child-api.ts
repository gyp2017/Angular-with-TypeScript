import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, ViewChild, AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'child',
  template: `<div class="wrapper">
              <h2>child</h2>
             </div>`,
  styles: ['.wrapper { background: lightgreen; }']
})
class ChildComponent {
  greet(name: string): void {
    console.log(`Hello fro ${name}`);
  }
}

@Component({
  selector: 'app',
  template: `<div class="wrapper">
               <h1>Parent</h1>
               <child #child1></child>
               <child #child2></child>
               <button (click)="child2.greet('Child 2')">Invoke greet()</button>
             </div>`,
  styles: ['.wrapper { background: cyan; }']
})
class AppComponent implements AfterViewInit {
  @ViewChild('child1')
  firstChild: ChildComponent;

  ngAfterViewInit() {
    this.firstChild.greet('Child 1');
  }
}


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ChildComponent],
  bootstrap: [AppComponent]
})
class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
