import { createBrowserRouter } from "react-router";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import StudentDashboard from "./screens/StudentDashboard";
import QRScanScreen from "./screens/QRScanScreen";
import AttendanceHistory from "./screens/AttendanceHistory";
import ProfessorDashboard from "./screens/ProfessorDashboard";
import QRCodeSession from "./screens/QRCodeSession";
import AnalyticsDashboard from "./screens/AnalyticsDashboard";
import AdminPanel from "./screens/AdminPanel";
import ProfileScreen from "./screens/ProfileScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/student",
    element: <StudentDashboard />,
  },
  {
    path: "/scan",
    element: <QRScanScreen />,
  },
  {
    path: "/history",
    element: <AttendanceHistory />,
  },
  {
    path: "/professor",
    element: <ProfessorDashboard />,
  },
  {
    path: "/session",
    element: <QRCodeSession />,
  },
  {
    path: "/analytics",
    element: <AnalyticsDashboard />,
  },
  {
    path: "/admin",
    element: <AdminPanel />,
  },
  {
    path: "/profile",
    element: <ProfileScreen />,
  },
]);