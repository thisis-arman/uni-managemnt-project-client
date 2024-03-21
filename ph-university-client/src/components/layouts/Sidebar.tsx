import { Layout, Menu } from "antd";
import { sidebarGenerator } from "../../utils/sidebarGenerator";
import adminPaths from "../../routes/admin.routes";
import facultyPaths from "../../routes/faculty.admin";
import studentPaths from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
const { Sider } = Layout;


const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
};

const Sidebar = () => {

    const user = useAppSelector(selectCurrentUser)
    let sidebarItems;
    switch (user!.role) {
        case userRole.ADMIN:
           sidebarItems= sidebarGenerator(adminPaths, userRole.ADMIN);  
            break;
        case userRole.FACULTY:
           sidebarItems= sidebarGenerator(facultyPaths, userRole.FACULTY);  
            break;
        case userRole.STUDENT:
           sidebarItems= sidebarGenerator(studentPaths, userRole.STUDENT);  
            break;
    
        default:
            break;
    }



    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
           
        >
            <div className="demo-logo-vertical" />
            <div>
                <h1 style={{ color: "white", textAlign: "center", margin: "10px" }}>PH UNi</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;