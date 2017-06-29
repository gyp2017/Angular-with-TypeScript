import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Idol, IdolService } from '../../services/idol.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'gg-main',
  templateUrl: 'app/components/main/main.component.html'
})
export default class MainComponent {
  idols: Observable<Idol[]>;
  nameFilter: FormControl = new FormControl();
  filterCriteria: string;

  constructor(private idolService: IdolService) {
    this.idols = idolService.getIdols();
    
    this.idolService.searchEvent
                    .subscribe(
                      params => this.idols = idolService.search(params),
                      err => console.log('err:', err),
                      () => console.log('Done')
                    );
  }
}
