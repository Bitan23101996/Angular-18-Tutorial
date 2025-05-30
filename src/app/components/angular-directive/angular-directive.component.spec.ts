import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDirectiveComponent } from './angular-directive.component';

describe('AngularDirectiveComponent', () => {
  let component: AngularDirectiveComponent;
  let fixture: ComponentFixture<AngularDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
