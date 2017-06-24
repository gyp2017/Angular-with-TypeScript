import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: './app/03_reactive.html'
})
class AppComponent {
  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      'username': new FormControl(),
      'ssn': new FormControl(),
      'passwordsGroup': new FormGroup({
        'password': new FormControl(),
        'pconfirm': new FormControl()
      })
    });
  }
  
  onSubmit() {
    console.log(this.formModel.value);
  }
}

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
