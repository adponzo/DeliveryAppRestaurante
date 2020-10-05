import { Component, OnInit } from '@angular/core';
import { AlertService } from './../../core/services/alert.service';
import { ToastService } from './../../core/services/toast.service';
import { CardapioService } from './../shared/cardapio.service';

@Component({
  selector: 'app-cardapio-list',
  templateUrl: './cardapio-list.page.html',
  styleUrls: ['./cardapio-list.page.scss'],
})
export class CardapioListPage  {
  products: ICardapioListResponse[] = [];

  constructor(
    private alert: AlertService,
    private toast: ToastService,
    private cardapioService: CardapioService
  ) { }

  async ionViewDidEnter() {
    this.products = await this.cardapioService.getAll();
  }

 /* ngOnInit() {

    for (let i = 0; i < 20; i++) {
      const product = {
        category: 'Hambúrguers',
        name: `Hambúrguer ${i + 1}`,
        price: (10.5 * (i + 1)),
         // tslint:disable-next-line: max-line-length
        description: 'Pão artesanal de brioche, suculento blend de costela, cheddar cremoso,
        barbecue da casa, maionese da casa, crispy de bacon, onion rings',
        photoUrl: 'https://source.unsplash.com/sc5sTPMrVfk/640x531'
      };

      this.products.push(product);
    }
  } */

  remove(produto: ICardapioListResponse) {
    this.alert.showConfirmDelete(produto.name, () => this.executeRemove(produto));
  }

  private async executeRemove(produto: ICardapioListResponse) {
    try {
      // chamar a api para remover
      await this.cardapioService.delete(produto._id);

     // Removendo da tela
      const index = this.products.indexOf(produto);
      this.products.splice(index, 1);

      this.toast.showSuccess('Produto removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o produto');
    }
  }
}

