import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasonWilkersonComponent } from './jason-wilkerson.component';

describe('JasonWilkersonComponent', () => {
  let component: JasonWilkersonComponent;
  let fixture: ComponentFixture<JasonWilkersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JasonWilkersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JasonWilkersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
