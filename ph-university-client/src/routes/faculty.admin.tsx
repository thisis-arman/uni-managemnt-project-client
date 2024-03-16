import CreateFaculty from "../pages/admin/CreateFaculty";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";


const facultyPaths = [
    {
        name: 'Dashboard',
        path: "dashboard",
        element: <FacultyDashboard />
    },
    {
        name: "student Management",
        children: [
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: <CreateFaculty />
            },

        ]

    }
]
export default facultyPaths;