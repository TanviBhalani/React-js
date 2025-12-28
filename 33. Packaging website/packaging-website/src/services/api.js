import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";


/* ================= QUERIES ================= */
export const submitQuery = async (data) => {
  return await addDoc(collection(db, "queries"), {
    industry: data.industry,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    contact: data.contact,
    needs: data.needs,
    message: data.message,
    fileName: data.file ? data.file.name : "",
    createdAt: new Date(),
  });
};

/* ================= WISHLIST ================= */
export const submitWishlist = async (data) => {
  return await addDoc(collection(db, "wishlist"), {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    contact: data.contact,
    company: data.company,
    business: data.business || "",
    consent: data.consent,
    createdAt: new Date(),
  });
};
