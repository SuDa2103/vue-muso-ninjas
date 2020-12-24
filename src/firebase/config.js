import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAGaWZxn4dby_VuS1n1yr8JnOuTG1-9kMY",
    authDomain: "muso-ninjas-7e4d0.firebaseapp.com",
    projectId: "muso-ninjas-7e4d0",
    storageBucket: "muso-ninjas-7e4d0.appspot.com",
    messagingSenderId: "72467329906",
    appId: "1:72467329906:web:4fba33c1fca76a452ea3eb"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, projectAuth, projectStorage, timestamp }