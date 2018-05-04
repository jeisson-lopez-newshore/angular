import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpShowComponent } from './cp-show.component';

describe('CpShowComponent', () => {
  let component: CpShowComponent;
  let fixture: ComponentFixture<CpShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
