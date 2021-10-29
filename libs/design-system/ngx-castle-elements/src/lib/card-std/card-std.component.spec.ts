import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStdComponent } from './card-std.component';

describe('CardStdComponent', () => {
  let component: CardStdComponent;
  let fixture: ComponentFixture<CardStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardStdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
