import {FaRegEdit, FaRegSave} from "react-icons/fa";
import {FiPlusCircle} from "react-icons/fi";
import {MdDeleteForever} from "react-icons/md";
import {useState} from "react";
import useNoteStore from "../store/useNoteStore.js";

const NoteAppZustand = () => {
    const {notes, removeNotes, editNotes, addNotes} = useNoteStore();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [editMode, setEditMode] = useState({
        status: false,
        currentId: null
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editMode.status) {
            addNotes({
                title: title,
                content: content,
                id: Math.random()
            })
            setTitle("")
            setContent("")
        }
        editNotes(editMode.currentId, {
            title: title,
            content: content
        })
        setTitle("")
        setContent("")
        setEditMode({status: false, currentId: null})
    }

    const handleEdit = (id) => {
        setEditMode({status: true, currentId: id})
        const note = notes.find((note) => note.id === id);
        setTitle(note.title);
        setContent(note.content);
    }

    return (
        <div>
            <div className="flex flex-col items-center p-6 space-y-6">
                <h1 className="text-4xl font-bold mb-6">NoteApp</h1>
                <form
                    className="flex flex-col items-center w-[500px] relative"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Take a note..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    >
                </textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 rounded-full text-white hover:bg-blue-600 absolute right-4 top-20 p-2"
                    >
                        {editMode.status ? <FaRegSave className="size-6"/> : <FiPlusCircle className="size-6"/>}
                    </button>
                </form>
            </div>
            <div className="grid grid-cols-4 gap-4 p-20">
                {notes.map((note) => (
                    <div key={note.id} className="p-4 border border-gray-300 rounded-lg shadow-md">
                        <div className="flex justify-end">
                            <FaRegEdit
                                className="size-6 text-orange-400 hover:text-orange-600 cursor-pointer"
                                onClick={() => handleEdit(note.id)}
                            />
                            <MdDeleteForever
                                className="size-6 text-red-500 hover:text-red-800 cursor-pointer"
                                onClick={() => removeNotes(note.id)}
                            />
                        </div>
                        <h2 className="text-xl font-bold text-center">{note.title}</h2>
                        <hr className="my-4"/>
                        <p className="text-gray-600">{note.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NoteAppZustand;