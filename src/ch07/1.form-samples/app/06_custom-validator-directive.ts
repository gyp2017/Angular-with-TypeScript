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

@Component({
  selector: 'app',
  templateUrl: './app/06_custom-validator-directive.html'
})
class AppComponent {
  onSubmit(formValue: any) {
    console.log(formValue);
  }
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SsnValidatorDirective],
  bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
