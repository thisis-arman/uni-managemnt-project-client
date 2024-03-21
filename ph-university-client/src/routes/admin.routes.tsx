import AcademicSemester from "../pages/academicManagement.tsx/AcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateUser from "../pages/admin/CreateUser";

const adminPaths = [
    {
        name: 'Dashboard',
        path: "dashboard",
        element: <AdminDashboard />
    },
    {
        name: "Academic Management",
        children: [
            {
                name: "Create Semester",
                path: "create-semester",
                element: <AcademicSemester />
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: <CreateFaculty />
            },
           
        ]
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

