import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatsComponent } from './page-stats.component';

describe('PageStatsComponent', () => {
  let component: PageStatsComponent;
  let fixture: ComponentFixture<PageStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
