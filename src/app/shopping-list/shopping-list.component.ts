// shopping-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ShoppingListService, ShoppingItem } from '../services/shopping-list.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  imports: [FormsModule, CommonModule] // Adicione CommonModule aqui
})
export class ShoppingListComponent implements OnInit {
  items: ShoppingItem[] = [];
  newItem: string = '';

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.shoppingListService.getItems().subscribe(data => {
      this.items = data;
      console.log('Items loaded:', this.items); // Log para verificar se os itens são carregados
    });
  }

  get notPurchasedItems() {
    return this.items.filter(item => !item.purchased);
  }

  get purchasedItems() {
    return this.items.filter(item => item.purchased);
  }

  addItem() {
    if (this.newItem.trim()) {
      this.shoppingListService.addItem(this.newItem).subscribe(item => {
        this.items.push(item);
        this.newItem = '';
      });
    }
  }

  editItem(id: number, name: string) {
    this.shoppingListService.editItem(id, name).subscribe(updatedItem => {
      const index = this.items.findIndex(item => item.id === id);
      this.items[index].name = updatedItem.name;
    });
  }

  togglePurchased(id: number, purchased: boolean) {
    this.shoppingListService.togglePurchased(id, purchased).subscribe(updatedItem => {
      const index = this.items.findIndex(item => item.id === id);
      this.items[index].purchased = updatedItem.purchased;
    });
  }

  deleteItem(id: number) {
    this.shoppingListService.deleteItem(id).subscribe(() => {
      this.items = this.items.filter(item => item.id !== id);
    });
  }
}
