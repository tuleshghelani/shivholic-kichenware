import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularChilliCutterComponent } from './regular-chilli-cutter.component';

describe('RegularChilliCutterComponent', () => {
  let component: RegularChilliCutterComponent;
  let fixture: ComponentFixture<RegularChilliCutterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularChilliCutterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularChilliCutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
