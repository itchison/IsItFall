import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsItFallComponent } from './is-it-fall.component';

describe('IsItFallComponent', () => {
  let component: IsItFallComponent;
  let fixture: ComponentFixture<IsItFallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsItFallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IsItFallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
