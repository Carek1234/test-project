import { Component, inject, OnInit, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FirebaseService } from './FirebaseService/firebasService.service'
import { sidebarComponent } from './sidebar/sidebar'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, sidebarComponent],
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
  }
}
