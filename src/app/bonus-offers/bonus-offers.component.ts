import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bonus-offers',
  templateUrl: './bonus-offers.component.html',
  styleUrls: ['./bonus-offers.component.css']
})
export class BonusOffersComponent implements OnInit {
  cardsObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.cardsObservable = this.getCard('/credit-card');
  }
  getCard(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}