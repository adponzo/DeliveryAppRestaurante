import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestauranteListPage } from './restaurante-list.page';

describe('RestauranteListPage', () => {
  let component: RestauranteListPage;
  let fixture: ComponentFixture<RestauranteListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestauranteListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
