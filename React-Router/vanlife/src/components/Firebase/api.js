import { db } from '../Firebase/firebase'
import { getDocs, collection } from 'firebase/firestore'

const vansRef = collection(db, 'vans')

export async function getVans(id = null) {
    const vansSnapshot = await getDocs(vansRef)
    const documents = []
    vansSnapshot.forEach((doc) => {
        documents.push({id: doc.id, ...doc.data()})
    })

    if (id) {
        vansSnapshot.forEach((doc) => {
            if (doc.id === id) {
                documents.push({id: doc.id, ...doc.data()})
            }
        })
    }

    return documents
}