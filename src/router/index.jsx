import {createBrowserRouter, Link} from "react-router-dom";
import ComponentA from "../components/ComponentA.jsx";
import ComponentB from "../components/ComponentB.jsx";
import NoteApp from "../components/NoteApp.jsx";
export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <h1>Hello World</h1>
                <Link to="about">About Us</Link>
            </div>
        ),
    },
    {
        path: "/add",
        element: <ComponentA/>,
    },
    {
        path: "/about",
        element: <ComponentB/>,
    },
    {
        path: "/noteapp",
        element: <NoteApp/>,
    },
]);