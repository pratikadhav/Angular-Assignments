import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { WrongComponent } from './wrong/wrong.component';
const routes: Routes = [
  {path:'books',component:BooksComponent},
  {path:'tech',component:TechnologiesComponent },
  {path:'',component:TechnologiesComponent },
  {path:'**',component:WrongComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
