import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EntrevistaMusica } from '../models/EntrevistaMusica';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EncuestaMusicaService {

  private url: string = "http://localhost:8080/encuestaMusica";
  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

  guardarEncuestaMusica(data: any): Observable<EntrevistaMusica> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    console.log("estoy guardando...")
    return this.http.post<EntrevistaMusica>(this.url + "/guardar", JSON.stringify(data), { headers: headers });
  }

  listarEncuestaMusica(): Observable<EntrevistaMusica[]> {
    console.log("estoy listando...")
    return this.http.get<EntrevistaMusica[]>(this.url + "/listar");
  }
}
