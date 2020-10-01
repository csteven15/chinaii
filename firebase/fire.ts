import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/functions'

require('dotenv').config()

var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

let fire = firebase

export default fire