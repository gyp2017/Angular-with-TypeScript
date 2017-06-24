import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IdolService } from '../../services/idol.service';

@Component({
  selector: 'gg-search',
  templateUrl: 'app/components/search/search.component.html'
})
export default class SearchComponent {
  formModel: FormGroup;
  categories: string[];

  constructor(private idolService: IdolService) {
    this.categories = this.idolService.getAllCategories();

    const fb = new FormBuilder();
    this.formModel = fb.group({
      'name': [null, Validators.minLength(2)],
      'height': [null, positiveNumberValidator],
      'category': [-1]
    });
  }

  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}

function positiveNumberValidator(control: FormControl): any {
  if (!control.value) return null;

  const height = parseInt(control.value);
  return height === null || typeof height === 'number' && height > 0 ? null : { positivenumber: true };
}
