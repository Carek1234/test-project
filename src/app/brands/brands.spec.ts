import { ComponentFixture, TestBed } from '@angular/core/testing'

import { brandsComponent } from './brands'

describe('Brands', () => {
  let component: brandsComponent
  let fixture: ComponentFixture<brandsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [brandsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(brandsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
