import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHTTPComponent } from './simple-http.component';

describe('SimpleHTTPComponent', () => {
  let component: SimpleHTTPComponent;
  let fixture: ComponentFixture<SimpleHTTPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleHTTPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleHTTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
