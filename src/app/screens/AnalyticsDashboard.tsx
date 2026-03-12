import { motion } from "motion/react";
import { TrendingUp, TrendingDown, Users, Calendar, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";
import BottomNav from "../components/BottomNav";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

export default function AnalyticsDashboard() {
  const navigate = useNavigate();
  
  const overallAttendance = [
    { name: "Present", value: 87, color: "#4CAF50", id: "present" },
    { name: "Absent", value: 13, color: "#EF5350", id: "absent" },
  ];

  const monthlyTrend = [
    { month: "Jan", rate: 82, id: "jan" },
    { month: "Feb", rate: 85, id: "feb" },
    { month: "Mar", rate: 87, id: "mar" },
    { month: "Apr", rate: 84, id: "apr" },
    { month: "May", rate: 88, id: "may" },
    { month: "Jun", rate: 90, id: "jun" },
  ];

  const moduleAttendance = [
    { module: "Computer Sci", rate: 92, id: "cs" },
    { module: "Math", rate: 88, id: "math" },
    { module: "Physics", rate: 85, id: "physics" },
    { module: "Chemistry", rate: 83, id: "chem" },
    { module: "English", rate: 90, id: "english" },
  ];

  const stats = [
    {
      label: "Overall Rate",
      value: "87%",
      change: "+3%",
      trend: "up",
      icon: TrendingUp,
      color: "text-[#4CAF50]",
      bgColor: "bg-[#4CAF50]/10",
    },
    {
      label: "This Week",
      value: "85%",
      change: "-2%",
      trend: "down",
      icon: TrendingDown,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      label: "Total Students",
      value: "125",
      change: "+5",
      trend: "up",
      icon: Users,
      color: "text-[#1E5FA8]",
      bgColor: "bg-[#1E5FA8]/10",
    },
    {
      label: "Classes Today",
      value: "3",
      change: "0",
      trend: "neutral",
      icon: Calendar,
      color: "text-[#29B6F6]",
      bgColor: "bg-[#29B6F6]/10",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6FA] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1A3A6B] via-[#1E5FA8] to-[#29B6F6] rounded-b-[2rem] pb-6 pt-12 px-6 shadow-lg">
        <div className="mb-6">
          <h1 className="text-white text-2xl font-bold">Analytics</h1>
          <p className="text-white/80 text-sm">Attendance insights & statistics</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3">
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
                <div className="flex items-start justify-between mb-2">
                  <div className={`w-10 h-10 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  {stat.trend !== "neutral" && (
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        stat.trend === "up"
                          ? "bg-[#4CAF50]/20 text-[#4CAF50]"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {stat.change}
                    </span>
                  )}
                </div>
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white/80 text-xs">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 mt-6 space-y-6">
        {/* Overall Attendance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
        >
          <h3 className="text-[#1A2340] font-semibold mb-4">Overall Attendance Rate</h3>
          <div className="flex items-center">
            <div className="flex-1">
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={overallAttendance}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {overallAttendance.map((entry) => (
                      <Cell key={entry.id} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-[#4CAF50]" />
                  <span className="text-sm text-[#7A8AA0]">Present</span>
                </div>
                <p className="text-2xl font-bold text-[#1A2340] ml-5">87%</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-[#EF5350]" />
                  <span className="text-sm text-[#7A8AA0]">Absent</span>
                </div>
                <p className="text-2xl font-bold text-[#1A2340] ml-5">13%</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Monthly Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#1A2340] font-semibold">Monthly Trend</h3>
            <div className="flex items-center gap-1 text-[#4CAF50]">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">+5%</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" tick={{ fill: "#7A8AA0", fontSize: 12 }} />
              <YAxis tick={{ fill: "#7A8AA0", fontSize: 12 }} domain={[75, 95]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#1E5FA8"
                strokeWidth={3}
                dot={{ fill: "#1E5FA8", r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Module-wise Attendance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
        >
          <h3 className="text-[#1A2340] font-semibold mb-4">Attendance by Module</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={moduleAttendance} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis type="number" tick={{ fill: "#7A8AA0", fontSize: 12 }} domain={[0, 100]} />
              <YAxis dataKey="module" type="category" tick={{ fill: "#7A8AA0", fontSize: 11 }} width={90} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="rate" fill="#29B6F6" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-[#1A2340] font-semibold mb-3">Key Insights</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-[#4CAF50]/10 to-[#4CAF50]/5 rounded-2xl p-4 border border-[#4CAF50]/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#4CAF50]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-[#4CAF50]" />
                </div>
                <div>
                  <h4 className="text-[#1A2340] font-medium mb-1">Attendance Improving</h4>
                  <p className="text-sm text-[#7A8AA0]">
                    Overall attendance rate increased by 3% this month compared to last month.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#29B6F6]/10 to-[#29B6F6]/5 rounded-2xl p-4 border border-[#29B6F6]/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#29B6F6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-[#29B6F6]" />
                </div>
                <div>
                  <h4 className="text-[#1A2340] font-medium mb-1">Best Performing Module</h4>
                  <p className="text-sm text-[#7A8AA0]">
                    Computer Science has the highest attendance rate at 92%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <BottomNav userType="professor" />
    </div>
  );
}