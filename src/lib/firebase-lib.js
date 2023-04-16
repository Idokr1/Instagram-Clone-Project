import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCSnYy3TR45TGlG9BxNnH2BjKQcL2uNmjM",
  authDomain: "instagram-clone-project-eab53.firebaseapp.com",
  projectId: "instagram-clone-project-eab53",
  storageBucket: "instagram-clone-project-eab53.appspot.com",
  messagingSenderId: "251437371583",
  appId: "1:251437371583:web:442f80a79babb7d680f60a",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(firebase);

export { firebase, FieldValue };
