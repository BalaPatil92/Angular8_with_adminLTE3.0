import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsnMasterComponent } from './hsn-master.component';

describe('HsnMasterComponent', () => {
  let component: HsnMasterComponent;
  let fixture: ComponentFixture<HsnMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsnMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsnMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
