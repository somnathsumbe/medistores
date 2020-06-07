import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HNSDetailsComponent } from './hnsdetails.component';

describe('HNSDetailsComponent', () => {
  let component: HNSDetailsComponent;
  let fixture: ComponentFixture<HNSDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HNSDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HNSDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
