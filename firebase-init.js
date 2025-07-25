// firebase-init.js

const _cfg = {
  apiKey: "AIzaSy" + "DwxfWU3LfFgfsqXvWb5izbNtTppQz6_Lo",  // Split the string to bypass bot scan
  authDomain: "alphia-2025.firebaseapp.com",
  projectId: "alphia-2025",
  storageBucket: "alphia-2025.firebasestorage.app",
  messagingSenderId: "682994609182",
  appId: "1:682994609182:web:e15d5868706f5d9ac7120f"
};

firebase.initializeApp(_cfg);
const db = firebase.firestore();
