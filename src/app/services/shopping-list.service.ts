// shopping-list.service.ts
// shopping-list.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ShoppingItem {
  id: number;
  name: string;
  purchased: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private apiUrl = 'http://localhost:3001/items';

  constructor(private http: HttpClient) {}

  // Obter itens
  getItems(): Observable<ShoppingItem[]> {
    return this.http.get<ShoppingItem[]>(this.apiUrl);
  }

  // Adicionar item
  addItem(name: string): Observable<ShoppingItem> {
    const newItem = { name, purchased: false };
    return this.http.post<ShoppingItem>(this.apiUrl, newItem);
  }

  // Editar item
  editItem(id: number, name: string): Observable<ShoppingItem> {
    return this.http.patch<ShoppingItem>(`${this.apiUrl}/${id}`, { name });
  }

  // Marcar como comprado
  togglePurchased(id: number, purchased: boolean): Observable<ShoppingItem> {
    return this.http.patch<ShoppingItem>(`${this.apiUrl}/${id}`, { purchased });
  }

  // Excluir item
  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
