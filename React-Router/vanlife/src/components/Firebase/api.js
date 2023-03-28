import { db } from '../Firebase/firebase';
import { getDocs, collection, where, query } from 'firebase/firestore';

let vans;
let hostVans;
let users;
const vansRef = collection(db, 'vans');
const userRef = collection(db, 'users');

export async function getVans(id) {
  const vansSnapshot = await getDocs(vansRef);
  vans = [];
  vansSnapshot.forEach((doc) => {
    vans.push({ id: doc.id, ...doc.data() });
  });
  return id ? vans[id] : vans;
}

export async function getHostVans(hostId) {
  const findVans = query(vansRef, where('hostId', '==', hostId));
  const vansSnapshot = await getDocs(findVans);
  hostVans = [];
  vansSnapshot.forEach((doc) => {
    hostVans.push({ id: doc.id, ...doc.data() });
  });
  return hostVans;
}

export async function getUser(email, password) {
  const findUser = query(userRef, where('email', '==', email), where('password', '==', password));
  const userSnapshot = await getDocs(findUser);
  users = [];
  userSnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });

  if (users.length === 0) {
    throw {
      message: 'No account with those credentials exists',
      statusText: '',
      status: '',
    };
  }

  const modifiedDocument = users.map((doc) => ({
    name: doc.name,
    token: "Enjoy your pizza, here's your tokens.",
  }));

  return modifiedDocument[0];
}
