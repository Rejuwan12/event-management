import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD9FKR64p7_JTmqeSP7b3s89LefBdgiSxw",
  authDomain: "health-8-project.firebaseapp.com",
  projectId: "health-8-project",
  storageBucket: "health-8-project.appspot.com",
  messagingSenderId: "226653365434",
  appId: "1:226653365434:web:cbd7f927865db9ff35ce83"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;