import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "productos"));
  const productos = [];
  querySnapshot.forEach((doc) => {
    productos.push({ ...doc.data(), id: doc.id });
  });

  return productos;
};

export const getProductosByCategory = async (categoriaBuscada) => {
  const q = query(
    collection(db, "productos"),
    where("category", "==", categoriaBuscada)
  );
  const querySnapshot = await getDocs(q);

  const productos = [];
  querySnapshot.forEach((doc) => {
    productos.push({ ...doc.data(), id: doc.id });
  });

  return productos;
};

export const getProduct = async (id) => {
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
  } catch (e) {
    return -1;
  }
};
