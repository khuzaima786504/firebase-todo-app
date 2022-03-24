import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb-zdXVqmyntgxFEehfwEB8Z4lAHTFyV0",
  authDomain: "todo-app-2633f.firebaseapp.com",
  projectId: "todo-app-2633f",
  storageBucket: "todo-app-2633f.appspot.com",
  messagingSenderId: "206347477539",
  appId: "1:206347477539:web:508718284bbb5adf394796"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);