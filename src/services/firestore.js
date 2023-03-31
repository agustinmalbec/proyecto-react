import { initializeApp } from "firebase/app";
import { getFirestore, doc, addDoc, getDoc, collection, getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBywULlD0li8HUhmN8piwLJA2VVblKOYk8",
  authDomain: "proyecto-react-58e35.firebaseapp.com",
  projectId: "proyecto-react-58e35",
  storageBucket: "proyecto-react-58e35.appspot.com",
  messagingSenderId: "120363231233",
  appId: "1:120363231233:web:f5859c26c19c6f76b33800",
  measurementId: "G-P6NKY73LJB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProductsFromDatabase(){

  const productsCollection = collection(db, "products");
  const snapshotProducts = await getDocs(productsCollection);
  const doc = snapshotProducts.docs;
  const dataProducts = doc.map(doc => ({...doc.data(), id: doc.id}) )
  return dataProducts;
}

export async function getProductsFromDatabaseByCategory(idCat){
  const productsCollection = collection(db, "products");
  const q = query(productsCollection, where("category", "==", idCat))
  const snapshotProducts = await getDocs(q);
  const doc = snapshotProducts.docs;
  const dataProducts = doc.map(doc => ({...doc.data(), id: doc.id}) )
  return dataProducts;
}

export async function getProductFromDatabase(prodId){

    const productsCollection = collection(db, "products");
    const docRef = doc(productsCollection, prodId);
    const snapshotDoc = await getDoc(docRef);
    return {...snapshotDoc.data(), id: snapshotDoc.id}
}

export async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");
  const response = await addDoc(collectionRef, orderData);
  return response.id;
}
