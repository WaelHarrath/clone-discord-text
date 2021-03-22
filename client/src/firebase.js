import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAErSxkpAhwQ_5z3YJnkpCwfOIXsf24bIo",
  authDomain: "definitlynotdiscord.firebaseapp.com",
  projectId: "definitlynotdiscord",
  storageBucket: "definitlynotdiscord.appspot.com",
  messagingSenderId: "672387437741",
  appId: "1:672387437741:web:a2e956dd0c16f5387c6224",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db