import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMvtstckComponent } from './page-mvtstck.component';

describe('PageMvtstckComponent', () => {
  let component: PageMvtstckComponent;
  let fixture: ComponentFixture<PageMvtstckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMvtstckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageMvtstckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
