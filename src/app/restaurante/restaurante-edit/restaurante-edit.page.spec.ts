import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestauranteEditPage } from './restaurante-edit.page';

describe('RestauranteEditPage', () => {
  let component: RestauranteEditPage;
  let fixture: ComponentFixture<RestauranteEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestauranteEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
