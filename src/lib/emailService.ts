import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const subscribeEmail = async (email: string) => {
  console.log("Attempting to subscribe email:", email);
  try {
    if (!db) {
      throw new Error("Firestore instance (db) is not initialized.");
    }
    const docRef = await addDoc(collection(db, "waitlist"), {
      email,
      timestamp: serverTimestamp(),
      source: "landing-page"
    });
    console.log("Document written with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error in subscribeEmail:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
};
