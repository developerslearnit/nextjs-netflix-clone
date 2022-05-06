// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAUGkoxPnETdJgTTrCnaeNvG7XEEFBhL3g',
  authDomain: 'nextjs-netflix-clone-e7140.firebaseapp.com',
  projectId: 'nextjs-netflix-clone-e7140',
  storageBucket: 'nextjs-netflix-clone-e7140.appspot.com',
  messagingSenderId: '245702058024',
  appId: '1:245702058024:web:b4f261e9f023c7604e151d',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
