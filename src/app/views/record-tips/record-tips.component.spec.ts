import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordTipsComponent } from './record-tips.component';

describe('RecordTipsComponent', () => {
  let component: RecordTipsComponent;
  let fixture: ComponentFixture<RecordTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
