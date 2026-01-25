import { Component, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { map } from 'rxjs/operators'
import { CommonModule } from '@angular/common'
import { FirebaseService } from '../FirebaseService/firebasService.service'
import { MatChipsModule } from '@angular/material/chips'

@Component({
  selector: 'app-brands',
  imports: [CommonModule, MatChipsModule],
  templateUrl: './brands.html',
  styleUrl: './brands.scss',
})
export class brandsComponent {
  private readonly carsFirebaseService = inject(FirebaseService)

  readonly brandTypes = toSignal(
    this.carsFirebaseService
      .getBrandTypes()
      .pipe(map((data) => data.flatMap((item) => item.brands))),
    { initialValue: [] },
  )
}
