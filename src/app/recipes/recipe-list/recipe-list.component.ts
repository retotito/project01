import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('RecipeName', 'description bla', 'http://www.seriouseats.com/recipes/assets_c/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit-thumb-1500xauto-436988.jpg'),
    new Recipe('RecipeName', 'description bla', 'http://www.seriouseats.com/recipes/assets_c/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit-thumb-1500xauto-436988.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
