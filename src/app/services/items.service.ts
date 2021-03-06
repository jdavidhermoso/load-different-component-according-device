import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  getItem() {
    return of({
      name: 'Item name'
    });
  }
}
