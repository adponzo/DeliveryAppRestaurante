import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from './../../core/modules/shared/shared.module';
import { RestauranteEditPageRoutingModule } from './restaurante-edit-routing.module';
import { RestauranteEditPage } from './restaurante-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestauranteEditPageRoutingModule,
    SharedModule
  ],
  declarations: [RestauranteEditPage]
})
export class RestauranteEditPageModule {}
