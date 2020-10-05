import { SharedModule } from './../../core/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EntregaEditPageRoutingModule } from './entrega-edit-routing.module';
import { EntregaEditPage } from './entrega-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregaEditPageRoutingModule,
    SharedModule
  ],
  declarations: [EntregaEditPage]
})
export class EntregaEditPageModule {}
