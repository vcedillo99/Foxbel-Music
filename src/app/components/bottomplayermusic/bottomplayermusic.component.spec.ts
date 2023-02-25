import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomplayermusicComponent } from './bottomplayermusic.component';

describe('BottomplayermusicComponent', () => {
  let component: BottomplayermusicComponent;
  let fixture: ComponentFixture<BottomplayermusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomplayermusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomplayermusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
