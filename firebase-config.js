// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDm0kPg3iITQrSHtF9U6hTjliZ1WaM4qVQ",
  authDomain: "riskacantikkkkkkkkkkkkkkkkkkkk-default-rtdb.firebaseio.com",
  databaseURL: "https://private-server-by-nikzz-default-rtdb.firebaseio.com",
  projectId: "riskacantikkkkkkkkkkkkkkkkkkkk",
  storageBucket: "riskacantikkkkkkkkkkkkkkkkkkkk.firebasestorage.app",
  messagingSenderId: "670353278206",
  appId: "1:442286923481:android:e9be224251084d199468c8",
  measurementId: "G-WQTCB8ZWK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };
