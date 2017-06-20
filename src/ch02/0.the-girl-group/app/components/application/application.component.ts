import { Component, ViewEncapsulation } from '@angular/core';
import { Idol, IdolService } from '../../services/idol.service';

@Component({
  selector: 'gg-application',
  templateUrl: 'app/components/application/application.component.html',
  styleUrls: ['app/components/application/application.component.css'],
  encapsulation: ViewEncapsulation.None
})
export default class ApplicationComponent {
  idols: Array<Idol> = [];

  constructor(private idolService: IdolService) {
    this.idols = idolService.getIdols();
  }
}

