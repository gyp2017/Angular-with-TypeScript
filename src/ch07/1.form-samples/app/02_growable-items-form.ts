import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: './app/02_growable-items-form.html'
})
class AppComponent {
  formModel: FormGroup = new FormGroup({
    emails: new FormArray([
      new FormControl()
    ])
  });

  get value () {
    return JSON.stringify(this.formModel.value, null, 4);
  }

  addEmail() {
    const emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }

  onSubmit () {
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
