import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EntrevistaMusica } from 'src/app/models/EntrevistaMusica';
import { EncuestaMusicaService } from '../../services/encuesta-musica.service';

@Component({
  selector: 'app-encuesta-musica',
  templateUrl: './encuesta-musica.component.html',
  styleUrls: ['./encuesta-musica.component.scss']
})
export class EncuestaMusicaComponent implements OnInit {

  input: string;
  categorias: string = "";
  service: EncuestaMusicaService;
  formGroup: FormGroup;

  constructor(private encuestaMusicaService: EncuestaMusicaService) {
    this.service = encuestaMusicaService;

    this.formGroup = new FormGroup({
      'email': new FormControl("", [Validators.required]),
      'Rock': new FormControl(false),
      'Pop': new FormControl(false),
      'Jazz': new FormControl(false),
      'Otros': new FormControl(false)
    });
  }

  ngOnInit(): void {
    this.listar();
  }

  guardar() {
    let em = new EntrevistaMusica;
    em.email = this.formGroup.controls['email'].value;
    em.categorias = this.categorias;
    console.log(this.categorias);

    this.service.guardarEncuestaMusica(em).subscribe(data => {
      window.location.reload();
    });
  }

  listar() {
    this.service.listarEncuestaMusica().subscribe(data => console.log(data));
  }

  obtenerValorChbx(event: any) {
    console.log(event.source.value);

    switch (event.source.value) {
      case "Rock": {
        if (event.checked) {
          this.categorias = this.categorias + "Rock ";
        }
        break;
      }
      case "Pop": {
        if (event.checked) {
          this.categorias = this.categorias + "Pop ";
        }
        break;
      }
      case "Jazz": {
        if (event.checked) {
          this.categorias = this.categorias + "Jazz ";
        }
        break;
      }
      case "Otros": {
        if (event.checked) {
          this.categorias = this.categorias + "Otros ";
        }
        break;
      }
      default: {
        this.categorias;
        break;
      }
    }
  }
}
