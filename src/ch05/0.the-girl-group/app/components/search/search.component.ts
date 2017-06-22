import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'gg-search',
  templateUrl: 'app/components/search/search.component.html'
})
export default class SearchComponent {
  formModel: FormGroup = new FormGroup({
    name: new FormControl(),
    height: new FormControl(),
    category: new FormControl()
  })
}
