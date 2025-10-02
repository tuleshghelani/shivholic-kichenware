import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDecorComponent } from './home-decor.component';

describe('HomeDecorComponent', () => {
  let component: HomeDecorComponent;
  let fixture: ComponentFixture<HomeDecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDecorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
