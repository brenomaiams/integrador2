import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from '../features/clientes/lista/lista-clientes/lista-clientes.component'
import { CadastroClientesComponent } from '../features/clientes/cadastro/cadastro-clientes/cadastro-clientes.component';

const routes: Routes = [
  { path: 'lista', component: ListaClientesComponent },
  { path: 'cadastro', component: CadastroClientesComponent },
  { path: '', redirectTo: 'lista', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }