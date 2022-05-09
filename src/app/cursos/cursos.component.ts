import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  nomePortal: string;

  cursos: string[];

  constructor() {
    this.nomePortal = 'http://meu.cursos.com';
    this.cursos = ['Java', 'Angular'];
  }

}