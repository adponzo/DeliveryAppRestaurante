import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { BusinessHourService } from './../shared/business-hour.service';
// Na verdade ele chamou isto de business-hours-list.page.ts
@Component({
  selector: 'app-restaurante-list',
  templateUrl: './restaurante-list.page.html',
  styleUrls: ['./restaurante-list.page.scss'],
})
export class RestauranteListPage implements OnInit {
  businessHours: IBusinessHourResponse[] = [];

  constructor(
    private alert: AlertService,
    private toast: ToastService,
    private businessHourService: BusinessHourService
  ) { }

  ionViewDidEnter() {
    this.loadCategories();
  }

  async loadCategories() {
    this.businessHours = await this.businessHourService.getAll();
  }

  ngOnInit() {
   /* this.businessHours.push({
      day: 'Terça Feira',
      start: '18:00',
      end: '00:00'
    });

    this.businessHours.push({
      day: 'Quarta Feira',
      start: '18:00',
      end: '00:00'
    });

    this.businessHours.push({
      day: 'Quinta Feira',
      start: '18:00',
      end: '00:00'
    });

    this.businessHours.push({
      day: 'Sexta Feira',
      start: '18:00',
      end: '02:00'
    });

    this.businessHours.push({
      day: 'Sábado',
      start: '18:00',
      end: '02:00'
    });

    this.businessHours.push({
      day: 'Domingo',
      start: '18:00',
      end: '01:00'
    }); */
  }

  remove(businessHour: IBusinessHourResponse) {
    this.alert.showConfirmDelete(this.getDayOfWeekName(businessHour.dayOfWeek), () => this.executeRemove(businessHour));
  }

  private async executeRemove(businessHour: IBusinessHourResponse) {
    try {
      // chamar a api para remover
      await this.businessHourService.delete(businessHour._id);

      // Removendo da tela
      const index = this.businessHours.indexOf(businessHour);
      this.businessHours.splice(index, 1);

      this.toast.showSuccess('Horário de funcionamento removido com sucesso!!!');
    } catch (error) {
      this.toast.showError('Erro ao remover o horário de funcionamento!!!');
    }
  }

  getDayOfWeekName(value: number) {
    return this.businessHourService.getDayOfWeekName(value);
  }
}

