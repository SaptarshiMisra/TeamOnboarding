import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDxWKNJLCyxttb6LRpqyoBqIzp2-xyUq7E",
  authDomain: "skywise-team-onboarding.firebaseapp.com",
  databaseURL: "https://skywise-team-onboarding.firebaseio.com",
  projectId: "skywise-team-onboarding",
  storageBucket: "skywise-team-onboarding.appspot.com",
  messagingSenderId: "1066282639360"
};
const fire = firebase.initializeApp(config);
export default fire;
