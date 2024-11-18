import {create} from "zustand";

const useNoteStore = create(set => ({
    notes: [],
    addNotes: (note) => set(state => ({notes: [...state.notes, note]})),
    removeNotes: (id) => set(state => ({notes: state.notes.filter(note => note.id !== id)})),
    editNotes: (id, note) => set(state => ({notes: state.notes.map(item => item.id === id ? note : item)})),
}))

export default useNoteStore;