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

  newComment: string;
  newRating: number;
  isReviewHidden: boolean = true;

  constructor(route: ActivatedRoute, idolService: IdolService) {
    let idolId: number = parseInt(route.snapshot.params['idolId']);
    this.idol = idolService.getIdolById(idolId);
    this.reviews = idolService.getReviwsForIdol(idolId);
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
}
