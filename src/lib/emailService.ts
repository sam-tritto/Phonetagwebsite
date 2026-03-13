import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const subscribeEmail = async (email: string) => {
  try {
    const docRef = await addDoc(collection(db, "waitlist"), {
      email,
      timestamp: serverTimestamp(),
      source: "landing-page"
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error };
  }
};
