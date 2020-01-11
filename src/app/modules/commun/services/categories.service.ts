import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private db: AngularFireDatabase) { }

  getAllCategories() {
  }
  getAllCategories1() {
    // tslint:disable-next-line: prefer-const
    const rootRef = this.db.database.ref();
    const urlRef = rootRef.child('categories');
    urlRef.once('value', function(snapshot) {

  snapshot.forEach( function(child) {
    console.log(child.key + ' :' + child.val() );
  });
});
  }

}
