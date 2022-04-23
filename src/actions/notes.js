import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import {types} from '../types/types';

export const startNewNote = ()=>{

    //As this action is asynchronious, I use "dispatch" as a reference of the tool of Redux Thunk that 
    //let me use async things in the store context, to dispatch actions, and the second
    //argument "getState" is used to get the store data of Redux.
    //I can put any name to that function, but I use "getState" as a representative name for its purpose.
    return async(dispatch, getState)=>{
        const {uid} = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const document = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(activeNote(document.id, newNote));
    }
}

export const activeNote = (id, note)=>({
    type : types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const startLoadingNotes = (uid)=>{
    return async (dispatch)=>{
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}
export const setNotes = (notes)=>({
    type: types.notesLoad,
    payload: notes
});