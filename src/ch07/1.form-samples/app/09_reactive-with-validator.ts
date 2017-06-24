import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

function ssnValidator(control: FormControl): { [key: string]: any } {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : { ssn: true };
}

function equalValidator({ value }): { [key: string]: any } {
  const [first, ...rest] = Object.keys(value || {});
  const valid = rest.every(v => value[v] === value[first]);
  return valid ? null : { equal: true };
}

@Component({
  selector: 'app',
  templateUrl: './app/09_reactive-with-validator.html'
})
class AppComponent {
  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      'username': new FormControl('', Validators.required),
      'ssn': new FormControl('', ssnValidator),
      'passwordsGroup': new FormGroup({
        'password': new FormControl('', Validators.minLength(5)),
        'pconfirm': new FormControl('')
      }, equalValidator)
    });
  }
  
  onSubmit() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
