// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmn6QYlRsec2c0v1WSJeS_ryZlCVQHhHE",
  authDomain: "riskacantikkkkkkkkkkkkkkkkkkkk-default-rtdb.firebaseio.com",
  databaseURL: "https://riskacantikkkkkkkkkkkkkkkkkkkk-default-rtdb.firebaseio.com",
  projectId: "riskacantikkkkkkkkkkkkkkkkkkkk",
  storageBucket: "riskacantikkkkkkkkkkkkkkkkkkkk.firebasestorage.app",
  messagingSenderId: "670353278206",
  appId: "1:670353278206:web:93c9ced7b309c2417d51af",
  measurementId: "G-WQTCB8ZWK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };
