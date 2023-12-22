import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCategoriesComponent } from './pages-categories.component';

describe('PagesCategoriesComponent', () => {
  let component: PagesCategoriesComponent;
  let fixture: ComponentFixture<PagesCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
