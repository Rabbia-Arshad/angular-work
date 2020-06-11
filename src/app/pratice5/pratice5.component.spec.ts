import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pratice5Component } from './pratice5.component';

describe('Pratice5Component', () => {
  let component: Pratice5Component;
  let fixture: ComponentFixture<Pratice5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pratice5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pratice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
