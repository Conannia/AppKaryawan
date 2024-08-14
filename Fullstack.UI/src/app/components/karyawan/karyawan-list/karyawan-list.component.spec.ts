import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaryawanListComponent } from './karyawan-list.component';

describe('KaryawanListComponent', () => {
  let component: KaryawanListComponent;
  let fixture: ComponentFixture<KaryawanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KaryawanListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaryawanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
