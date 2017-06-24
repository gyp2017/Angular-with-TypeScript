import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

function ssnValidator(control: FormControl): { [key: string]: any } {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : { ssn: true };
}

@Component({
  selector: 'app',
  templateUrl: './app/05_custom-validator.html'
})
class AppComponent {
  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      'ssn': new FormControl('', ssnValidator)
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
