import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormControl, NG_VALIDATORS } from '@angular/forms';

function ssnValidator(control: FormControl): { [key: string]: any } {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : { ssn: true };
}

@Directive({
  selector: '[ssn]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: ssnValidator,
    multi: true
  }]
})
class SsnValidatorDirective {}

function equalValidator({ value }): { [key: string]: any } {
  const [first, ...rest] = Object.keys(value || {});
  const valid = rest.every(v => value[v] === value[first]);
  return valid ? null : { equal: true };
}

@Directive({
  selector: '[equal]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: equalValidator,
    multi: true
  }]
})
class EqualValidatorDirective {}

@Component({
  selector: 'app',
  templateUrl: './app/10_template-driven-with-validator.html'
})
class AppComponent {
  onSubmit(formValue: any, isFormValid: boolean) {
    if (isFormValid) {
      console.log(formValue);
    }
  }
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SsnValidatorDirective, EqualValidatorDirective],
  bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
