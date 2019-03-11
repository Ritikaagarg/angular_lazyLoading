import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderDataComponent } from './loader-data.component';

describe('LoaderDataComponent', () => {
  let component: LoaderDataComponent;
  let fixture: ComponentFixture<LoaderDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
