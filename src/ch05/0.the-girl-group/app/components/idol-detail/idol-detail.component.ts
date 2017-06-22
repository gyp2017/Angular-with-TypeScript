import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Idol, Review, IdolService } from '../../services/idol.service';

@Component({
  selector: 'gg-idol-detail',
  templateUrl: 'app/components/idol-detail/idol-detail.component.html'
})
export default class IdolDetailComponent {
  idol: Idol;
  reviews: Array<Review>;

  constructor(route: ActivatedRoute, idolService: IdolService) {
    let idolId: number = parseInt(route.snapshot.params['idolId']);
    this.idol = idolService.getIdolById(idolId);
    this.reviews = idolService.getReviwsForIdol(idolId);
  }
}
