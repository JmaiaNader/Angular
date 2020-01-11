import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/modules/commun/services/categories.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private categorieService: CategoriesService, private db: AngularFireDatabase) { }
 categories: Observable<any[]> ;
  ngOnInit() {
    this.categories = this.db.list('categories').valueChanges();
    console.log('this.categories ' + this.categories);

  }

}
