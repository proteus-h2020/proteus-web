import { Component, Input } from '@angular/core';

@Component({
  selector: 'ba-card',
  templateUrl: './baCard.html',
})
export class BaCard {
  @Input() title: string;
  @Input() baCardClass: string;
  @Input() cardType: string;
}
