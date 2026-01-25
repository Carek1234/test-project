import { inject, Injectable } from '@angular/core'
import { Firestore, collectionSnapshots, query } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export interface Car {
  id?: string
  brands: string[]
  car_type: string[]
}

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  private firestore = inject(Firestore)

  getBrands(): Observable<Car[]> {
    const q = query(this.firestore, 'cars')
    return collectionSnapshots(q).pipe(
      map((snapshots) =>
        snapshots.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Car,
        ),
      ),
    )
  }
}
