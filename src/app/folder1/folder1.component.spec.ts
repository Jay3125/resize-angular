import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Folder1Component } from './folder1.component';

describe('Folder1Component', () => {
  let component: Folder1Component;
  let fixture: ComponentFixture<Folder1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Folder1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Folder1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
