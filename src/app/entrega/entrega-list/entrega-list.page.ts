import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { DeliveryService } from './../shared/delivery.service';

@Component({
  selector: 'app-entrega-list',
  templateUrl: './entrega-list.page.html',
  styleUrls: ['./entrega-list.page.scss'],
})
export class EntregaListPage  {
  deliveries: IDeliveryResponse[] = [];

  constructor(
    private alert: AlertService,
    private toast: ToastService,
    private deliveryService: DeliveryService
  ) { }

  /*  ngOnInit() {
  /*  for (let i = 0; i < 20; i++) {
      const delivery = {
        neighborhood: `Bairro ${i + 1}`,
        timeToDelivery: 60,
        free: (i > 0) && ((i % 2) === 0),
        value: (10.5 * (i + 1))
      };

      this.deliveries.push(delivery);
    }
  } */

  ionViewDidEnter() {
    this.loadDelivery();
  }

  async loadDelivery() {
    this.deliveries = await this.deliveryService.getAll();
  }

  remove(delivery: IDeliveryResponse) {
    this.alert.showConfirmDelete(delivery.neighborhood, () => this.executeRemove(delivery));
  }

  private async executeRemove(delivery: IDeliveryResponse) {
    try {
      // chamar a api para remover
      await this.deliveryService.delete(delivery._id);

      // Removendo da tela
      const index = this.deliveries.indexOf(delivery);
      this.deliveries.splice(index, 1);

      this.toast.showSuccess('Local de entrega removido com sucesso.!!!');
    } catch (error) {
      this.toast.showError('Erro ao remover o local de entrega.!!!');
    }
  }
}
