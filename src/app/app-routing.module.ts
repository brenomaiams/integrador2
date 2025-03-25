import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cliente/cadastrar/cadastrar.component';
import { ListaClientesComponent } from './features/clientes/lista/lista-clientes/lista-clientes.component';

const routes: Routes = [
  { path: 'clientes/cadastro', component: CadastrarComponent },
  { path: 'clientes/lista', component: ListaClientesComponent },
  { path: 'clientes', redirectTo: 'clientes/lista', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }