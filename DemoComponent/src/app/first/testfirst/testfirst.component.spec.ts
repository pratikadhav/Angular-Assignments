import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestfirstComponent } from './testfirst.component';

describe('TestfirstComponent', () => {
  let component: TestfirstComponent;
  let fixture: ComponentFixture<TestfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestfirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
