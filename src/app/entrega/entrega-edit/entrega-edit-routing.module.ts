import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntregaEditPage } from './entrega-edit.page';

const routes: Routes = [
  {
    path: '',
    component: EntregaEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregaEditPageRoutingModule {}
