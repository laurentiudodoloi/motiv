import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TargetModalPage } from './target-modal.page';

describe('TargetModalPage', () => {
  let component: TargetModalPage;
  let fixture: ComponentFixture<TargetModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TargetModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
