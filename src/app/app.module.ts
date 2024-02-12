import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { Category1Component } from './categories/category1/category1.component';
import { Category2Component } from './categories/category1/category2/category2.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import {HttpClientModule} from '@angular/common/http';
import { Custompipe } from './custompipes';
import { employee } from './employee';
import { filterPipe } from './filterpipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    Category1Component,
    Category2Component,
    TemplateformComponent,
    ReactiveFormComponent,
    PipesComponent
    ,Custompipe,filterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
