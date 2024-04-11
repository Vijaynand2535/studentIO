import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTComponent } from './std-t.component';

describe('StdTComponent', () => {
  let component: StdTComponent;
  let fixture: ComponentFixture<StdTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
