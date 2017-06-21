import { Component } from '@angular/core';
import { IdolService } from '../../services/idol.service';

@Component({
  selector: 'gg-main',
  templateUrl: 'app/components/main/main.component.html'
})
export default class MainComponent {
  idols: Array<Idol> = [];

  constructor(private idolService: IdolService) {
    this.idols = idolService.getIdols();
  }
}
