import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routeGenerator";
import adminPaths from "./admin.routes";
import Login from "../pages/Login";


const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>
    },
    {
        path: '/admin',
        element: <App />,
        children: routeGenerator(adminPaths)
    },
    {
        path: '/faculty',
        element: <App />,
        children: routeGenerator(adminPaths)
    },
    {
        path: '/student',
        element: <App />,
        children: routeGenerator(adminPaths)
    },
    {
        path: '/login',
        element:<Login/>
    }
])


export default router;