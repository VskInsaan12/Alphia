// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC84DTXsKFOd99YlHrh44w4z5AZBHgbgP8",
  authDomain: "alphia-login.firebaseapp.com",
  databaseURL: "https://alphia-login-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "alphia-login",
  storageBucket: "alphia-login.appspot.com",
  messagingSenderId: "1092964695051",
  appId: "1:1092964695051:web:57a03a84d97c85479d5b0e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userId = document.getElementById("userid").value.trim();
  const password = document.getElementById("password").value.trim();
  const statusMsg = document.getElementById("statusMsg");

  firebase.database().ref("users").get().then((snapshot) => {
    if (snapshot.exists()) {
      const users = snapshot.val();
      const match = Object.values(users).find(
        (user) => user.userid === userId && user.password === password
      );

      if (match) {
        window.location.href = "form.html";
      } else {
        statusMsg.textContent = "Invalid User ID or Password.";
      }
    } else {
      statusMsg.textContent = "No users found.";
    }
  }).catch((error) => {
    console.error("Database error:", error);
    statusMsg.textContent = "Error connecting to database.";
  });
});

// Disable right-click
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Disable common dev tools shortcuts
document.addEventListener("keydown", (e) => {
  if (
    (e.ctrlKey && ["u", "U", "s", "S", "c", "C"].includes(e.key)) ||
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "i", "C", "c", "J", "j"].includes(e.key))
  ) {
    e.preventDefault();
  }
});
