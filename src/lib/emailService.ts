import { db, firebaseConfig } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const subscribeEmail = async (email: string) => {
  console.log("Attempting to subscribe email:", email);
  
  // Create a timeout promise
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out. Please check your internet connection or Firebase configuration.")), 10000)
  );

  try {
    if (!db) {
      throw new Error("Firestore instance (db) is not initialized. Please check your .env configuration.");
    }
    
    // Check if placeholders are still present
    if (firebaseConfig.apiKey === "YOUR_API_KEY" || !firebaseConfig.apiKey) {
      throw new Error("Firebase API Key is missing or using placeholder. Please ensure your .env file is correct and you have restarted your dev server.");
    }

    const submission = addDoc(collection(db, "waitlist"), {
      email,
      timestamp: serverTimestamp(),
      source: "landing-page"
    });

    // Race the submission against the timeout
    const docRef = await Promise.race([submission, timeout]) as any;
    
    console.log("Document written with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error in subscribeEmail:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
};
