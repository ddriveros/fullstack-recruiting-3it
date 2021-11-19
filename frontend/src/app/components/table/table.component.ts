import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  email: string;
  categorias: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { email: 'test@test.cl', categorias:'Jazz, Otros' },
  { email: 'danny@test.cl', categorias:'Rock, Otros' },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['email', 'categorias'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
