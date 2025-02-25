// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA2j_XWRx0og3uND05HMkMEQpFjGnYHIco',
  authDomain: 'codegenix-4f244.firebaseapp.com',
  projectId: 'codegenix-4f244',
  storageBucket: 'codegenix-4f244.appspot.com',
  messagingSenderId: '219408134138',
  appId: '1:219408134138:web:b3343dbd019139931d3e43',
  measurementId: 'G-8FBLTFW8D6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

