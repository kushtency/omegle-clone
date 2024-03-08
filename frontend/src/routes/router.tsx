import { createBrowserRouter } from "react-router-dom";
import homepage from "../pages/homepage";
import room from "../pages/room";

const router = createBrowserRouter([
    {
        path: "/",
        element: <homepage />,



    },
    {
        path: "/room",
        element: <room/>,



    },

]);