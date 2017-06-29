import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Idol, Review, IdolService } from '../../services/idol.service';
import { BidService } from '../../services/bid.service';

@Component({
  selector: 'gg-idol-detail',
  templateUrl: 'app/components/idol-detail/idol-detail.component.html'
})
export default class IdolDetailComponent {
  idol: Idol;
  reviews: Array<Review>;

  newComment: string;
  newRating: number;
  currentBid : number;

  isReviewHidden: boolean = true;
  isWatching: boolean = false;

  private subscription: Subscription = null;

  constructor(route: ActivatedRoute, idolService: IdolService, private bidService: BidService) {
    let idolId: number = parseInt(route.snapshot.params['idolId']);

    idolService.getIdolById(idolId)
               .subscribe(
                 idol => {
                   this.idol = idol;
                  //  this.currentBid = idol.price;
                 },
                 error => console.error(error)
               );
    idolService.getReviwsForIdol(idolId)
               .subscribe(
                 reviews => this.reviews = reviews,
                 error => console.error(error)
               );
  }

  addReview(): void {
    let review = new Review(0, this.idol.id, new Date(), 'Anonymous', this.newRating, this.newComment);

    console.log(JSON.stringify(review));

    this.reviews = [...this.reviews, review];
    this.idol.rating = this.averageRating(this.reviews);

    this.resetForm();
  }

  averageRating(reviews: Array<Review>): number {
    let sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }

  resetForm(): void {
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }

  toggleWatchIdol() {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
      this.subscription = null;
      this.isWatching = false;
    } else {
      this.isWatching = true;
      this.subscription = this.bidService.wetchIdol(this.idol.id)
        .subscribe(
          idols => this.currentBid = idols.find(
            (i: any) => i.idolId === this.idol.id
          ).bid,
          error => console.log(error)
        );
    }
  }
}
