// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// to have access to the database
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCOnXPUXGshTFns5ie719eUqPYRraqx7hA',
  authDomain: 'chatter-2dfeb.firebaseapp.com',
  projectId: 'chatter-2dfeb',
  storageBucket: 'chatter-2dfeb.appspot.com',
  messagingSenderId: '940522188200',
  appId: '1:940522188200:web:2ee0a26c0e21450c8d419d',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// export database
export const db = getDatabase(app)
// install uid
