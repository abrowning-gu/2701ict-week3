import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Level3Page } from './level3.page';

describe('Level3Page', () => {
  let component: Level3Page;
  let fixture: ComponentFixture<Level3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Level3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
