import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes
import { ListaClientesComponent } from '../features/clientes/lista/lista-clientes/lista-clientes.component'
import { CadastroClientesComponent } from '../features/clientes/cadastro/cadastro-clientes/cadastro-clientes.component';
import { ClientesRoutingModule } from './cliente-routing.module'
// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ListaClientesComponent,
    CadastroClientesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // Angular Material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule,
    ClientesRoutingModule,

  ]
})
export class ClientesModule { }