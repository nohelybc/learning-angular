import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijxComponent } from './hijx.component';

describe('HijxComponent', () => {
  let component: HijxComponent;
  let fixture: ComponentFixture<HijxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
