import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeekABooChildComponent } from './peek-a-boo-child.component';

describe('PeekABooChildComponent', () => {
  let component: PeekABooChildComponent;
  let fixture: ComponentFixture<PeekABooChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeekABooChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeekABooChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
