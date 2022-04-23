import { db } from "../firebase/firebase-config"

export const loadNotes = async(uid)=>{
    const noteSnapshot = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];
    noteSnapshot.forEach(snapChild=>{
        notes.push({
            id: snapChild.id,
            ...snapChild.data()
        });
    });

    console.log(notes)
    return notes;
}