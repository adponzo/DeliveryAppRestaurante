import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntregaEditPage } from './entrega-edit.page';

describe('EntregaEditPage', () => {
  let component: EntregaEditPage;
  let fixture: ComponentFixture<EntregaEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntregaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
