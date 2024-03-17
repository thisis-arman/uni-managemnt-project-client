import CreateStudent from "../pages/admin/CreateStudent";
import StudentDashboard from "../pages/student/StudentDashboard";


const studentPaths = [
    {
        name: 'Dashboard',
        path: "dashboard",
        element: <StudentDashboard />
    },
    {
        name: "Student Management",
        children: [
            {
                name: "Create Student",
                path: "create-student",
                element: <CreateStudent />
            },
          
        ]

    }
]

export default studentPaths;