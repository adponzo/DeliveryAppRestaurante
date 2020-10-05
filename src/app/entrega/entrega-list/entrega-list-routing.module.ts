import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntregaListPage } from './entrega-list.page';

const routes: Routes = [
  {
    path: '',
    component: EntregaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregaListPageRoutingModule {}
