import firebase from 'firebase';
import firebaseConfig from './firebaseConfig'

// Initialize Firebase
const firebaseRef = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseRef;