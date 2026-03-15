import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID",
  recaptchaKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY || "YOUR_RECAPTCHA_SITE_KEY"
};

// Initialize Firebase
let app: any;
try {
  console.log("Initializing Firebase with config:", { 
    ...firebaseConfig, 
    apiKey: firebaseConfig.apiKey ? "PRESENT" : "MISSING" 
  });
  app = initializeApp(firebaseConfig);
  
  // Initialize App Check (only in browser environment)
  if (typeof window !== "undefined") {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(firebaseConfig.recaptchaKey),
      isTokenAutoRefreshEnabled: true
    });
    console.log("Firebase App Check initialized");
  }

  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Firebase initialization failed:", error);
}

export const db = getFirestore(app);
