import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/Observable/of';
import 'rxjs/add/operator/delay';

function ssnValidator(control: FormControl): { [key: string]: any } {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : { ssn: true };
}

function asyncSsnValidator(control: FormControl): Observable<any> {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return Observable.of(valid ? null : { ssn: true }).delay(1000);
}

@Component({
  selector: 'app',
  templateUrl: './app/08_async-validator.html'
})
class AppComponent {
  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      'ssn': new FormControl('', null, asyncSsnValidator)
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
