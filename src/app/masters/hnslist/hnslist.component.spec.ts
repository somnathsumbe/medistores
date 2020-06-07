import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HNSListComponent } from './hnslist.component';

describe('HNSListComponent', () => {
  let component: HNSListComponent;
  let fixture: ComponentFixture<HNSListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HNSListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HNSListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
