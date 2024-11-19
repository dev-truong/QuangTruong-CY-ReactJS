import {createBrowserRouter} from "react-router-dom";
import TodoList from "../pages/TodoList.jsx";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <TodoList/>,
    },
]);