import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { Category1Component } from './categories/category1/category1.component';
import { Category2Component } from './categories/category1/category2/category2.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'categories',component:CategoriesComponent, children:[{path:'category1',component:Category1Component,children:[{path:'category2',component:Category2Component}]},
]},
{path:'templatedriven',component:TemplateformComponent},
{path:'reactiveForms',component:ReactiveFormComponent},
{path:'pipes',component:PipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
