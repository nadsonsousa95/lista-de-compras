// list-item.component.ts
import { Component, Input } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() item!: { id: number; name: string; purchased: boolean };
  editing = false;
  editedName = '';

  constructor(private shoppingListService: ShoppingListService) {}

  togglePurchased() {
    this.shoppingListService.togglePurchased(this.item.id, true);
  }

  deleteItem() {
    this.shoppingListService.deleteItem(this.item.id);
  }

  startEditing() {
    this.editing = true;
    this.editedName = this.item.name;
  }

  saveEdit() {
    if (this.editedName.trim()) {
      this.shoppingListService.editItem(this.item.id, this.editedName);
      this.editing = false;
    }
  }

  cancelEdit() {
    this.editing = false;
  }
}

