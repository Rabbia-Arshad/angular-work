import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizaaWebComponent } from './pizaa-web.component';

describe('PizaaWebComponent', () => {
  let component: PizaaWebComponent;
  let fixture: ComponentFixture<PizaaWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizaaWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizaaWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
