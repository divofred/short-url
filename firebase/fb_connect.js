const { initializeApp } = require("firebase/app");

const app = initializeApp({
  apiKey: "AIzaSyBmosOkcxkOMzKCc-kZbqMsOVvHKfuIT4M",
  authDomain: "short-url-4e0b5.firebaseapp.com",
  projectId: "short-url-4e0b5",
});

module.exports = app;
