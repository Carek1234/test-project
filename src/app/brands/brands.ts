import { Component, inject } from '@angular/core'
import { FirebaseService } from '../FirebaseService/firebasService.service'

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.html',
  styleUrl: './brands.scss',
})
export class brandsComponent {
  carsFirebaseService = inject(FirebaseService)

  ngOnInit() {
    this.carsFirebaseService.getBrandTypes().subscribe((brandData) => {
      console.log('Car Types from Firestore:', brandData)
    })
  }
}
