import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregaListPageRoutingModule } from './entrega-list-routing.module';

import { EntregaListPage } from './entrega-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregaListPageRoutingModule
  ],
  declarations: [EntregaListPage]
})
export class EntregaListPageModule {}
