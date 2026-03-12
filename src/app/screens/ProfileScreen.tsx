import { motion } from "motion/react";
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Award, Edit, ChevronRight, LogOut, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import BottomNav from "../components/BottomNav";
import EstLogo from "../components/EstLogo";

export default function ProfileScreen() {
  const navigate = useNavigate();
  
  const studentInfo = {
    name: "Sarah Ahmed",
    email: "sarah.ahmed@est-sb.ma",
    phone: "+212 6 12 34 56 78",
    role: "Student",
    department: "Computer Science",
    studentId: "EST-2024-1234",
    enrollmentDate: "September 2024",
    avatar: "SA",
  };

  const menuItems = [
    {
      category: "Account",
      items: [
        { icon: Edit, label: "Edit Profile", action: "edit" },
        { icon: BookOpen, label: "Change Password", action: "password" },
        { icon: Award, label: "Notifications", action: "notifications", badge: "3" },
      ],
    },
    {
      category: "Settings",
      items: [
        { icon: User, label: "Privacy & Security", action: "privacy" },
        { icon: Mail, label: "Account Settings", action: "settings" },
      ],
    },
  ];

  const stats = [
    { label: "Attendance Rate", value: "85%" },
    { label: "Total Classes", value: "48" },
    { label: "Present", value: "41" },
    { label: "Absent", value: "7" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6FA] pb-20">
      {/* Header with Profile */}
      <div className="bg-gradient-to-br from-[#1A3A6B] via-[#1E5FA8] to-[#29B6F6] rounded-b-[2rem] pb-12 pt-12 px-6 shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          {/* Avatar */}
          <div className="relative inline-block mb-4">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30">
              <span className="text-4xl text-white font-bold">{studentInfo.avatar}</span>
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center border-2 border-white shadow-lg">
              <Edit className="h-4 w-4 text-white" />
            </button>
          </div>

          {/* Profile Info */}
          <h2 className="text-white text-2xl font-bold mb-1">{studentInfo.name}</h2>
          <Badge className="bg-white/20 text-white border-white/30 mb-2">
            {studentInfo.role}
          </Badge>
          <p className="text-white/80 text-sm">{studentInfo.email}</p>
        </motion.div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 mb-6"
        >
          <div className="grid grid-cols-4 gap-3">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-[#1A2340] mb-1">{stat.value}</p>
                <p className="text-xs text-[#7A8AA0]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Academic Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6"
        >
          <h3 className="text-[#1A2340] font-semibold mb-4">Academic Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-10 h-10 bg-[#1E5FA8]/10 rounded-xl flex items-center justify-center">
                <User className="h-5 w-5 text-[#1E5FA8]" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#7A8AA0]">Student ID</p>
                <p className="text-[#1A2340] font-medium">{studentInfo.studentId}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-10 h-10 bg-[#29B6F6]/10 rounded-xl flex items-center justify-center">
                <MapPin className="h-5 w-5 text-[#29B6F6]" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#7A8AA0]">Department</p>
                <p className="text-[#1A2340] font-medium">{studentInfo.department}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center">
                <Calendar className="h-5 w-5 text-[#4CAF50]" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#7A8AA0]">Enrollment Date</p>
                <p className="text-[#1A2340] font-medium">{studentInfo.enrollmentDate}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6"
        >
          <h3 className="text-[#1A2340] font-semibold mb-4">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-10 h-10 bg-[#1E5FA8]/10 rounded-xl flex items-center justify-center">
                <Mail className="h-5 w-5 text-[#1E5FA8]" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#7A8AA0]">Email</p>
                <p className="text-[#1A2340] font-medium text-sm">{studentInfo.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center">
                <Phone className="h-5 w-5 text-[#4CAF50]" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#7A8AA0]">Phone</p>
                <p className="text-[#1A2340] font-medium">{studentInfo.phone}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Menu Items */}
        {menuItems.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + sectionIndex * 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 overflow-hidden"
          >
            <div className="px-5 py-3 bg-[#F4F6FA] border-b border-gray-100">
              <h3 className="text-[#1A2340] font-semibold text-sm">{section.category}</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <button
                    key={itemIndex}
                    className="w-full flex items-center gap-4 px-5 py-4 hover:bg-[#F4F6FA] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#1E5FA8]/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[#1E5FA8]" />
                    </div>
                    <span className="flex-1 text-left text-[#1A2340] font-medium">{item.label}</span>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <Badge className="bg-red-500 text-white border-0 h-5 min-w-5 px-1.5">
                          {item.badge}
                        </Badge>
                      )}
                      <ChevronRight className="h-5 w-5 text-[#7A8AA0]" />
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* Logout Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Button
            variant="outline"
            className="w-full h-14 rounded-2xl border-red-200 text-red-500 hover:bg-red-50 font-medium"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </Button>
        </motion.div>

        <p className="text-center text-[#7A8AA0] text-xs mt-6 mb-2">
          Version 1.0.0
        </p>
      </div>

      <BottomNav userType="student" />
    </div>
  );
}