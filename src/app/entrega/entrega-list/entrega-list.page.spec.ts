import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntregaListPage } from './entrega-list.page';

describe('EntregaListPage', () => {
  let component: EntregaListPage;
  let fixture: ComponentFixture<EntregaListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntregaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
