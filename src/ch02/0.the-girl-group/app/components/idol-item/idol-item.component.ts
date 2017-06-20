import { Component, Input } from '@angular/core';

import { Idol } from 'app/services/idol.service';

@Component({
  selector: 'gg-idol-item',
  templateUrl: 'app/components/idol-item/idol-item.component.html'
})
export default class IdolItemComponent {
  @Input() idol: Idol;
}
