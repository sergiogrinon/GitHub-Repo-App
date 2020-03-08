import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhSearchEngineComponent } from './gh-search-engine.component';

describe('GhSearchEngineComponent', () => {
  let component: GhSearchEngineComponent;
  let fixture: ComponentFixture<GhSearchEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhSearchEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhSearchEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
