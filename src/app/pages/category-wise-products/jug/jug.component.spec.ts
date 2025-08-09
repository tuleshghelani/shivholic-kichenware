import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugComponent } from './jug.component';

describe('JugComponent', () => {
  let component: JugComponent;
  let fixture: ComponentFixture<JugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JugComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
