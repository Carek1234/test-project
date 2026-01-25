import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import { provideFirestore, getFirestore } from '@angular/fire/firestore'
import { routes } from './app.routes'

const firebaseConfig = {
  apiKey: 'AIzaSyBLbZENT99ZOsdyr6bTiNAPPT5DOhD_WyM',
  authDomain: 'test-project-e8b34.firebaseapp.com',
  projectId: 'test-project-e8b34',
  storageBucket: 'test-project-e8b34.firebasestorage.app',
  messagingSenderId: '1097456960092',
  appId: '1:1097456960092:web:943a9ce896017d12dc5c99',
  measurementId: 'G-SFXS4K1L5F',
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
}
