import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaMusicaComponent } from './pages/encuesta-musica/encuesta-musica.component';

const routes: Routes = [
  { path: '', component: EncuestaMusicaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
