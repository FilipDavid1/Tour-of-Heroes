import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './item';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ItemService {


  private itemUrl = 'api/items'; //url to web api

  private log(message: string) {
    this.messageService.add(`ItemService: ${message}`);
  }

  /* get items from the server */
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemUrl).pipe(
      tap(_ => this.log('fetched items')),
      catchError(this.handleError<Item[]>('getItems', [])),

    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {

      //send the error to remote logging infrastructure
      console.error(error); //log to console instead

      //better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      //let the app keep running by returning an empry result
      return of(result as T);
    }
  }

  /** get irem by id. eill 404 if id not found */
  getItem(id: number): Observable<Item> {
    const url = `${this.itemUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.log(`fetched item id=${id}`)),
    catchError(this.handleError<Item>(`getItem id=${id}`))
    )
  }

  updateItem(item: Item): Observable<any> {
    return this.http.put(this.itemUrl, item, this.httpOptions).pipe(
      tap(_ => this.log(`updated item id=${item}`)),
      catchError(this.handleError<any>('updateItem'))
    )
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemUrl, item, this.httpOptions).pipe(
      tap((newItem: Item) => this.log(`added item w/ id=${newItem.id}`)),
      catchError(this.handleError<Item>('addItem'))
    );
  }

  deleteItem(id: number): Observable<Item>{
    const url = `${this.itemUrl}/${id}`;

    return this.http.delete<Item>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted item id=${id}`)),
    catchError(this.handleError<Item>('deleteItem'))
    )
  }

  searchItems(iTerm: string): Observable<Item[]> {
    if (!iTerm.trim()){
      return of([]);
    }
    return this.http.get<Item[]>(`${this.itemUrl}/?name=${iTerm}`).pipe(
      tap(x => x.length ?
        this.log(`found items matching "${iTerm}"`) :
        this.log(`no items matching "${iTerm}"`)),
        catchError(this.handleError<Item[]>(`searchItems`, []))
    );
  }


  constructor(private http: HttpClient, private messageService: MessageService) { }
}
