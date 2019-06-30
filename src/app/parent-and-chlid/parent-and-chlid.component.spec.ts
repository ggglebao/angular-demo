import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAndChlidComponent } from './parent-and-chlid.component';

describe('ParentAndChlidComponent', () => {
  let component: ParentAndChlidComponent;
  let fixture: ComponentFixture<ParentAndChlidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentAndChlidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAndChlidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
