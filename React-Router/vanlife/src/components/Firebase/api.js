import { db } from '../Firebase/firebase';
import { getDocs, collection } from 'firebase/firestore';

export async function getVans(id) {
  const vansRef = collection(db, 'vans');
  const vansSnapshot = await getDocs(vansRef);
  const documents = [];
  vansSnapshot.forEach((doc) => {
    documents.push({ id: doc.id, ...doc.data() });
  });
  return id ? documents[id] : documents;
}
