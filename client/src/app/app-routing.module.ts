import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeComponent} from "./recipe/recipe.component";
import {HistoryComponent} from "./history/history.component";
import {ProductViewComponent} from "./product-view/product-view.component";

const routes: Routes = [

  {
    path:'',
    component:RecipeComponent
  },
  {
    path:'history',
    component:HistoryComponent
  },
  {
    path:'product/:id',
    component:ProductViewComponent
  }


  // { path: 'libraries/:id', component: LibrariesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
