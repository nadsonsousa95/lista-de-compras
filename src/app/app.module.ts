import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule aqui
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ShoppingListComponent,
    AppComponent,  // Adicione AppComponent aqui como importação, se for standalone
    FormsModule, // Adicione FormsModule aqui
    
  ],
  declarations: [
   ListItemComponent 
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
