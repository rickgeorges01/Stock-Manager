import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvtStckArticleComponent } from './detail-mvt-stck-article.component';

describe('DetailMvtStckArticleComponent', () => {
  let component: DetailMvtStckArticleComponent;
  let fixture: ComponentFixture<DetailMvtStckArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailMvtStckArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailMvtStckArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
