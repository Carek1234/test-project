import { Component, inject, OnInit, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FirebaseService } from './FirebaseService/firebasService.service'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('my-app')
  carsFirebaseService = inject(FirebaseService)

  ngOnInit() {
    this.carsFirebaseService.getCarData().subscribe((carData) => {
      console.log('Brands from Firestore:', carData)
    })

    this.carsFirebaseService.getBrandTypes().subscribe((brandData) => {
      console.log('Car Types from Firestore:', brandData)
    })
  }
}
