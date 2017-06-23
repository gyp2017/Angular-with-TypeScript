import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Idol, IdolService } from '../../services/idol.service';
import { FilterPipe } from '../pipes/filter.pipe';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'gg-main',
  templateUrl: 'app/components/main/main.component.html'
})
export default class MainComponent {
  idols: Array<Idol> = [];
  nameFilter: FormControl = new FormControl();
  filterCriteria: string;

  constructor(private idolService: IdolService) {
    this.idols = idolService.getIdols();
    this.nameFilter.valueChanges
        .debounceTime(100)
        .subscribe(
          value => this.filterCriteria = value,
          error => console.error(error)
        )
  }
}
