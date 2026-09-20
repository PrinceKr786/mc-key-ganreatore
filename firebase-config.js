// firebase-config.js (For both Admin & User Panel)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0SG7LXoZU0G_TtXq5WVSfv48gkh6qNRE",
  authDomain: "keymods-16d99.firebaseapp.com",
  databaseURL: "https://keymods-16d99-default-rtdb.firebaseio.com",
  projectId: "keymods-16d99",
  storageBucket: "keymods-16d99.firebasestorage.app",
  messagingSenderId: "321251368066",
  appId: "1:321251368066:web:6a535e735cc953b431689b",
  measurementId: "G-5HYZS247W8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
