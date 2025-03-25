import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  dataCadastro: string;
}

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
  standalone: false
})
export class ListaClientesComponent {
  displayedColumns: string[] = ['id', 'nome', 'email', 'telefone', 'dataCadastro'];
  dataSource: Cliente[] = [
    { id: 1, nome: 'João Silva', email: 'joao@exemplo.com', telefone: '(11) 9999-8888', dataCadastro: '10/05/2023' },
    { id: 2, nome: 'Maria Souza', email: 'maria@exemplo.com', telefone: '(21) 98888-7777', dataCadastro: '15/06/2023' },
    { id: 3, nome: 'Carlos Oliveira', email: 'carlos@exemplo.com', telefone: '(31) 97777-6666', dataCadastro: '20/07/2023' },
    { id: 4, nome: 'Ana Santos', email: 'ana@exemplo.com', telefone: '(41) 96666-5555', dataCadastro: '25/08/2023' },
  ];

  constructor(private router: Router) {}

  navegarParaCadastro() {
    this.router.navigate(['/clientes/cadastro']);
  }
}