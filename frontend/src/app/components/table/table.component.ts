import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrevistaMusica } from 'src/app/models/EntrevistaMusica';
import { EncuestaMusicaService } from 'src/app/services/encuesta-musica.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['email', 'categorias'];
  dataSource: MatTableDataSource<EntrevistaMusica>;
  service: EncuestaMusicaService;

  constructor(private encuestaMusicaService: EncuestaMusicaService, private route: ActivatedRoute, public router: Router) {
    this.service = encuestaMusicaService;
  }

  ngOnInit(): void {
    this.service.listarEncuestaMusica().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      });
  }
}
