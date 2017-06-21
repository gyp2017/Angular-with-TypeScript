import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gg-idol-detail',
  templateUrl: 'app/components/idol-detail/idol-detail.component.html'
})
export default class IdolDetailComponent {
  idolName: string;

  constructor(route: ActivatedRoute) {
    this.idolName = route.snapshot.params['name'];
  }
}
