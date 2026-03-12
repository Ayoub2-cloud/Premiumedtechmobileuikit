import { Home, ScanLine, History, User } from "lucide-react";
import { Link, useLocation } from "react-router";

interface BottomNavProps {
  userType: "student" | "professor";
}

export default function BottomNav({ userType }: BottomNavProps) {
  const location = useLocation();
  
  const studentNavItems = [
    { icon: Home, label: "Dashboard", path: "/student" },
    { icon: ScanLine, label: "Scan", path: "/scan" },
    { icon: History, label: "History", path: "/history" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  const professorNavItems = [
    { icon: Home, label: "Dashboard", path: "/professor" },
    { icon: ScanLine, label: "Session", path: "/session" },
    { icon: History, label: "Analytics", path: "/analytics" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  const navItems = userType === "student" ? studentNavItems : professorNavItems;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe">
      <div className="max-w-md mx-auto">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center justify-center flex-1 h-full transition-colors"
              >
                <Icon
                  className={`h-6 w-6 mb-1 ${
                    isActive ? "text-[#1E5FA8]" : "text-[#7A8AA0]"
                  }`}
                />
                <span
                  className={`text-xs ${
                    isActive ? "text-[#1E5FA8] font-medium" : "text-[#7A8AA0]"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
