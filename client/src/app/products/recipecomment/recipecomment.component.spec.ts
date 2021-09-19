import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipecommentComponent } from './recipecomment.component';

describe('RecipecommentComponent', () => {
  let component: RecipecommentComponent;
  let fixture: ComponentFixture<RecipecommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipecommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipecommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
