import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importe o FormsModule
import { CommonModule } from '@angular/common';  // Importar CommonModule

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  
  shoppingList: {name:string, completed:boolean}[] = [];
  newItem = '';

  addItem() {
    if  (this.newItem === ''){
      alert('Preencha o campo item corretamente')
    }
    else if (this.newItem.trim()) {
      this.shoppingList.push({ name: this.newItem, completed: false });
      this.newItem = '';
    }
  }

  markAsBought(index: number) {
    this.shoppingList[index].completed = !this.shoppingList[index].completed;
  }

  editItem(index: number) {
    const updatedItem = prompt('Editar item:', this.shoppingList[index].name);
    if (updatedItem) {
      this.shoppingList[index].name = updatedItem;
    }
  }

  deleteItem(index: number) {
    this.shoppingList.splice(index, 1);
  }
    // Nova propriedade para obter itens comprados
  get purchasedItems() {
      return this.shoppingList.filter(item => item.completed);
  }

}
