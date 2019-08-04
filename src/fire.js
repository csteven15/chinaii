import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

var config = {
  apiKey: "AIzaSyBqikek5ILja-sTsjqi--r80fNlOTpxvTM",
  authDomain: "china-ii-a1616.firebaseapp.com",
  databaseURL: "https://china-ii-a1616.firebaseio.com",
  projectId: "china-ii-a1616",
  storageBucket: "china-ii-a1616.appspot.com",
  messagingSenderId: "932675543621"
};
firebase.initializeApp(config);

let fire = firebase;

export default fire;