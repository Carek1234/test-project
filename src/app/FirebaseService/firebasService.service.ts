import { inject, Injectable } from '@angular/core'
import { Firestore, collection, collectionData } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

export interface Car {
  id?: string
  brands: string[]
  car_type: string[]
}

export interface BrandGroup {
  id: string
  brands: string[]
}

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  private firestore = inject(Firestore)
  carsCollection = collection(this.firestore, 'cars')
  brandCollection = collection(this.firestore, 'brands')

  getCarData(): Observable<Car[]> {
    return collectionData(this.carsCollection, { idField: 'id' }) as Observable<Car[]>
  }

  getBrandTypes(): Observable<BrandGroup[]> {
    return collectionData(this.brandCollection, { idField: 'id' }) as Observable<BrandGroup[]>
  }
}
