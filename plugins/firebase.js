import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDm-y25FPIVnm-2f-ZtD6H_f6LkRaccb0c',
  authDomain: 'webapp-c8c7a.firebaseapp.com',
  databaseURL: 'https://webapp-c8c7a.firebaseio.com',
  projectId: 'webapp-c8c7a',
  storageBucket: 'webapp-c8c7a.appspot.com',
  messagingSenderId: '995955347951'
}
let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(config)
}

export const db = app.database()
export const msgRef = db.ref('messages')
export const userRef = db.ref('users')
