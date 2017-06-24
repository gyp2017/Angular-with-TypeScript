import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: './app/03_reactive.html'
})
class AppComponent {
  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      'username': ['user'],
      'ssn': [''],
      'passwordsGroup': fb.group({
        'password': [''],
        'pconfirm': ['']
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
