import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getItems(): Observable<any[]> {
     return this.http.get<any[]>(this.apiUrl+'todos');
   }
}
