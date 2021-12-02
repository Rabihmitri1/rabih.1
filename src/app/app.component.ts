import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string,
  ...
};


@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li *ngFor="let item of item$ | async">
      {{ item.name }}
    </li>
  </ul>
  `
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item$: Observable<Item[]>;
  constructor(firestore: Firestore) {
    const collection = collection(firestore, 'items');
    this.item$ = collectionData(collection);
  title = 'Pixabay Image Search';
}
