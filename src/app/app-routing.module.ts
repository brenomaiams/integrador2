import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cliente/cadastrar/cadastrar.component';
import { ListaClientesComponent } from './features/clientes/lista/lista-clientes/lista-clientes.component';

const routes: Routes = [
  { path: 'clientes/cadastro', component: CadastrarComponent },
  { path: 'clientes/lista', component: ListaClientesComponent },
  { path: 'clientes', redirectTo: 'clientes/cadastro', pathMatch: 'full' },  // Alterado para redirecionar para cadastro
  { path: '', redirectTo: 'clientes/cadastro', pathMatch: 'full' } // Definindo a rota inicial como clientes/cadastro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
