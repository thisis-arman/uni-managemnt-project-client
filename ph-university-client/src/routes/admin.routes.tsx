import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";
import CreateUser from "../pages/admin/CreateUser";
type TSidebarItem = {
    key: string,
    label: ReactNode,
    children?:TSidebarItem[] | undefined
}

const adminPaths = [
    {
        name: 'Dashboard',
        path: "dashboard",
        element: <AdminDashboard />
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "create-admin",
                element: <CreateAdmin />
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: <CreateFaculty />
            },
            {
                name: "Create Student",
                path: "create-student",
                element: <CreateStudent />
            },
            {
                name: "Create User",
                path: "create-user",
                element: <CreateUser/>
            },
        ]

    }
]




export default adminPaths;


export const adminSidebar = adminPaths.reduce((acc :TSidebarItem[], item) => {
    if (item.path && item.name) {
        acc.push({
            key: item.name,
            label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
        })
    }
    if (item.children) {
        acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map((child) => ({
                key: child.name,
                label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
            }))
        })
    }
    return acc;
}, [])