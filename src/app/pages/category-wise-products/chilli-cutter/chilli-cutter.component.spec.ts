import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilliCutterComponent } from './chilli-cutter.component';

describe('ChilliCutterComponent', () => {
  let component: ChilliCutterComponent;
  let fixture: ComponentFixture<ChilliCutterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChilliCutterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChilliCutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
