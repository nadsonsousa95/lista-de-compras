import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [{
    path: '',
    component: ShoppingListComponent
}];



