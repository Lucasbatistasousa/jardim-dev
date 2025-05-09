import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/Home/App.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
])

export default router