import { motion } from "motion/react";
import { Users, QrCode, TrendingUp, Calendar, Play, UserCheck, LogOut } from "lucide-react";
import { useNavigate } from "react-router";
import BottomNav from "../components/BottomNav";
import { Button } from "../components/ui/button";
import EstLogo from "../components/EstLogo";

export default function ProfessorDashboard() {
  const navigate = useNavigate();
  
  const todayClasses = [
    {
      id: 1,
      course: "Computer Science",
      time: "08:00 - 10:00",
      room: "C105",
      students: 45,
      attended: 38,
      status: "completed",
    },
    {
      id: 2,
      course: "Data Structures",
      time: "10:00 - 12:00",
      room: "C106",
      students: 42,
      attended: 0,
      status: "active",
    },
    {
      id: 3,
      course: "Algorithms",
      time: "14:00 - 16:00",
      room: "C107",
      students: 38,
      attended: 0,
      status: "upcoming",
    },
  ];

  const stats = [
    {
      label: "Today's Classes",
      value: "3",
      icon: Calendar,
      color: "from-[#1E5FA8] to-[#29B6F6]",
      bgColor: "bg-[#1E5FA8]/10",
      textColor: "text-[#1E5FA8]",
    },
    {
      label: "Total Students",
      value: "125",
      icon: Users,
      color: "from-[#4CAF50] to-[#2E7D32]",
      bgColor: "bg-[#4CAF50]/10",
      textColor: "text-[#4CAF50]",
    },
    {
      label: "Avg. Attendance",
      value: "87%",
      icon: TrendingUp,
      color: "from-[#29B6F6] to-[#1E5FA8]",
      bgColor: "bg-[#29B6F6]/10",
      textColor: "text-[#29B6F6]",
    },
    {
      label: "Active Sessions",
      value: "1",
      icon: Play,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      textColor: "text-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6FA] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1A3A6B] via-[#1E5FA8] to-[#29B6F6] rounded-b-[2rem] pb-8 pt-12 px-6 shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
              <span className="text-xl text-white font-semibold">MK</span>
            </div>
            <div>
              <p className="text-white/80 text-sm">Welcome,</p>
              <h2 className="text-white text-xl font-semibold">Prof. Mohammed Karim</h2>
            </div>
          </div>
          <Button
            variant="outline"
            className="border-gray-200 text-[#7A8AA0] rounded-xl h-11 hover:bg-[#F4F6FA]"
            onClick={() => navigate("/login")}
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </Button>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20"
              >
                <div className={`w-10 h-10 ${stat.bgColor} rounded-xl flex items-center justify-center mb-2`}>
                  <Icon className={`h-5 w-5 ${stat.textColor}`} />
                </div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 mt-6 space-y-6">
        {/* Today's Classes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#1A2340] font-semibold">Today's Classes</h3>
            <span className="text-sm text-[#7A8AA0]">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </div>

          <div className="space-y-4">
            {todayClasses.map((classItem, index) => (
              <motion.div
                key={classItem.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-[#1A2340] font-semibold text-lg mb-1">
                      {classItem.course}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-[#7A8AA0]">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {classItem.time}
                      </span>
                      <span>Room {classItem.room}</span>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      classItem.status === "completed"
                        ? "bg-[#4CAF50]/10 text-[#4CAF50]"
                        : classItem.status === "active"
                        ? "bg-orange-500/10 text-orange-500"
                        : "bg-[#29B6F6]/10 text-[#29B6F6]"
                    }`}
                  >
                    {classItem.status === "completed"
                      ? "Completed"
                      : classItem.status === "active"
                      ? "Active"
                      : "Upcoming"}
                  </div>
                </div>

                {/* Student Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1 bg-[#F4F6FA] rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="h-4 w-4 text-[#7A8AA0]" />
                      <span className="text-xs text-[#7A8AA0]">Total Students</span>
                    </div>
                    <p className="text-xl font-bold text-[#1A2340]">{classItem.students}</p>
                  </div>
                  <div className="flex-1 bg-[#F4F6FA] rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <UserCheck className="h-4 w-4 text-[#4CAF50]" />
                      <span className="text-xs text-[#7A8AA0]">Attended</span>
                    </div>
                    <p className="text-xl font-bold text-[#4CAF50]">{classItem.attended}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                {classItem.status === "active" ? (
                  <Button className="w-full bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] text-white rounded-xl h-11 hover:from-[#45a049] hover:to-[#276f2b]">
                    <QrCode className="h-5 w-5 mr-2" />
                    View QR Code
                  </Button>
                ) : classItem.status === "upcoming" ? (
                  <Button className="w-full bg-gradient-to-r from-[#1E5FA8] to-[#29B6F6] text-white rounded-xl h-11 hover:from-[#1a5494] hover:to-[#25a5dd]">
                    <Play className="h-5 w-5 mr-2" />
                    Start Session
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full border-gray-200 text-[#7A8AA0] rounded-xl h-11 hover:bg-[#F4F6FA]"
                  >
                    View Report
                  </Button>
                )}

                {/* Attendance Bar */}
                {classItem.attended > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs text-[#7A8AA0] mb-2">
                      <span>Attendance Progress</span>
                      <span>{Math.round((classItem.attended / classItem.students) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(classItem.attended / classItem.students) * 100}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] rounded-full"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h3 className="text-[#1A2340] font-semibold mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1E5FA8] to-[#29B6F6] rounded-xl flex items-center justify-center mx-auto mb-2">
                <QrCode className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm text-[#1A2340] font-medium">New Session</p>
            </button>

            <button className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-xl flex items-center justify-center mx-auto mb-2">
                <Users className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm text-[#1A2340] font-medium">Student List</p>
            </button>
          </div>
        </motion.div>
      </div>

      <BottomNav userType="professor" />
    </div>
  );
}