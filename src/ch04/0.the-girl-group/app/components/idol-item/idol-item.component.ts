import { Component, Input } from '@angular/core';

import { Idol } from '../../services/idol.service';

@Component({
  selector: 'gg-idol-item',
  templateUrl: 'app/components/idol-item/idol-item.component.html',
  styleUrls: ['app/components/idol-item/idol-item.component.css']
})
export default class IdolItemComponent {
  @Input() idol: Idol;
}
