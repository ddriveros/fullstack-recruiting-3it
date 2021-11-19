import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-encuesta-musica',
  templateUrl: './encuesta-musica.component.html',
  styleUrls: ['./encuesta-musica.component.scss']
})
export class EncuestaMusicaComponent implements OnInit {

  input: string;
  categorias: string;

  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.listarEncuestaMusica().subscribe(data => console.log(data));
   }

  listarEncuestaMusica():Observable<string>{
    console.log("estoy listando...")
    return this.http.get<string>("http://localhost:8080/encuestaMusica/listar");
  }

  guardar(){

    let data = [{
      "email": "xfx@test.cl",
      "categorias": "jazz, rockck"
    }];

    this.guardarEncuestaMusica(data).subscribe(data => console.log(data));
    this.listarEncuestaMusica().subscribe(data => console.log(data));
  }

  guardarEncuestaMusica(data: any):Observable<string>{
    console.log("estoy guardando...")
    return this.http.post<any>("http://localhost:8080/encuestaMusica/guardar", JSON.stringify(data));
  }

}
