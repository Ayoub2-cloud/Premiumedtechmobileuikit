import { motion } from "motion/react";
import { QrCode, Clock, TrendingUp, Award, Calendar, ChevronRight, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import BottomNav from "../components/BottomNav";
import EstLogo from "../components/EstLogo";

export default function StudentDashboard() {
  const navigate = useNavigate();

  const upcomingClasses = [
    { id: 1, module: "Computer Science", time: "09:00 AM", room: "Lab 101", status: "upcoming" },
    { id: 2, module: "Mathematics", time: "11:00 AM", room: "Room 205", status: "upcoming" },
    { id: 3, module: "Physics", time: "02:00 PM", room: "Lab 102", status: "upcoming" },
  ];

  const stats = [
    { label: "Attendance Rate", value: "87%", icon: TrendingUp, color: "from-[#4CAF50] to-[#2E7D32]" },
    { label: "Classes Today", value: "3", icon: Calendar, color: "from-[#1E5FA8] to-[#29B6F6]" },
    { label: "Total Credits", value: "24", icon: Award, color: "from-orange-500 to-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4F6FA] to-[#E8EDF5] pb-20">
      {/* Enhanced Header with Gradient */}
      <div className="bg-gradient-to-br from-[#1A3A6B] via-[#1E5FA8] to-[#29B6F6] rounded-b-[2.5rem] pb-8 pt-12 px-6 shadow-xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          {/* Logo and Logout */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-lg overflow-hidden">
                <EstLogo size="sm" />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">EST SB</h2>
                <p className="text-white/70 text-xs">Smart Attendance</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/login")}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-xl transition-all border border-white/30 backdrop-blur-md shadow-lg"
            >
              <LogOut className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Welcome Section */}
          <div className="mb-6">
            <h1 className="text-white text-3xl font-bold mb-2">Welcome Back,</h1>
            <p className="text-white/90 text-lg">Ahmed Benali</p>
            <p className="text-white/70 text-sm mt-1">Student ID: EST-2024-001</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-lg"
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3 shadow-md`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-white/80 text-xs leading-tight">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 mt-6 space-y-6">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-[#1A2340] font-semibold mb-3">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-3">
            <button className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1E5FA8] to-[#29B6F6] rounded-xl flex items-center justify-center mx-auto mb-2">
                <QrCode className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs text-[#1A2340] font-medium">Scan QR</p>
            </button>

            <button className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-xl flex items-center justify-center mx-auto mb-2">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs text-[#1A2340] font-medium">Schedule</p>
            </button>

            <button className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1A3A6B] to-[#1E5FA8] rounded-xl flex items-center justify-center mx-auto mb-2">
                <User className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs text-[#1A2340] font-medium">Profile</p>
            </button>
          </div>
        </motion.div>

        {/* Today's Classes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-[#1A2340] font-semibold mb-3">Today's Classes</h3>
          <div className="space-y-3">
            {upcomingClasses.map((classItem, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E5FA8] to-[#29B6F6] rounded-xl flex flex-col items-center justify-center text-white">
                  <span className="text-xs opacity-80">Time</span>
                  <span className="text-sm font-semibold">{classItem.time}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-[#1A2340] font-medium">{classItem.module}</h4>
                  <p className="text-sm text-[#7A8AA0]">Room {classItem.room}</p>
                </div>
                <div className="px-3 py-1 bg-[#29B6F6]/10 rounded-full">
                  <span className="text-xs text-[#1E5FA8] font-medium">Upcoming</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <BottomNav userType="student" />
    </div>
  );
}