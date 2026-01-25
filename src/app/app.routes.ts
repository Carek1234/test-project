import { Routes } from '@angular/router'
import { carsComponent } from './cars/cars'
import { brandsComponent } from './brands/brands'

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: carsComponent },
  { path: 'cars', component: carsComponent },
  { path: 'brands', component: brandsComponent },
  { path: '**', redirectTo: 'home' },
]
