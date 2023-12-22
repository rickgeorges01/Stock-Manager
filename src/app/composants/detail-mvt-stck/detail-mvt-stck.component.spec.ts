import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvtStckComponent } from './detail-mvt-stck.component';

describe('DetailMvtStckComponent', () => {
  let component: DetailMvtStckComponent;
  let fixture: ComponentFixture<DetailMvtStckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailMvtStckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailMvtStckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
