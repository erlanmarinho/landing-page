import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbtnPrimaryComponent } from './nbtn-primary.component';

describe('NbtnPrimaryComponent', () => {
  let component: NbtnPrimaryComponent;
  let fixture: ComponentFixture<NbtnPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbtnPrimaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NbtnPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
