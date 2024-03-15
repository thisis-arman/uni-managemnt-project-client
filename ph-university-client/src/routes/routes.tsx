import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import adminPaths from "./admin.routes";
import { ReactNode } from "react";


type TRoute = {
    path: string,
    element:ReactNode
}

const adminRoutes = adminPaths.reduce((acc :TRoute[], item ) => {
    if (item.path && item.element) {
        acc.push({
            path: item.path,
            element: item.element
        })
    }
    if (item.children) {
        item.children.forEach((child) => {
            acc.push(
                {
                    path: child.path,
                    element: child.element
                }
            )
        })
    }
    return acc;
}, [] as TRoute[])

console.log(adminRoutes)

const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>
    },
    {
        path: '/admin',
        element: <App />,
        children: adminRoutes
    },
    {
        path: '/faculty',
        element: <App />,
        children: adminRoutes
    },
    {
        path: '/student',
        element: <App />,
        children: adminRoutes
    },
])


export default router;