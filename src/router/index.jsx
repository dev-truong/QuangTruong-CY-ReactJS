import {createBrowserRouter, Link} from "react-router-dom";
import NoteApp from "../components/NoteApp.jsx";
import NoteAppZustand from "../components/NoteAppZustand.jsx";
export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <h1>Hello World</h1>
                <Link to="noteapp" className='hover:text-red-500'>Noteapp</Link>
                <Link to="noteapp-zustand" className='hover:text-red-500 block'>Noteapp use zustand</Link>
            </div>
        ),
    },
    {
        path: "/noteapp",
        element: <NoteApp/>,
    },
    {
        path: "/noteapp-zustand",
        element: <NoteAppZustand/>,
    },
]);