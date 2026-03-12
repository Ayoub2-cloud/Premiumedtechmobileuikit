import { motion } from "motion/react";
import { Search, Filter, MoreVertical, UserPlus, Download, TrendingUp, Users, BookOpen, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import EstLogo from "../components/EstLogo";

export default function AdminPanel() {
  const stats = [
    { label: "Total Students", value: "1,245", icon: Users, color: "from-[#1E5FA8] to-[#29B6F6]", change: "+12%" },
    { label: "Total Professors", value: "87", icon: BookOpen, color: "from-[#4CAF50] to-[#2E7D32]", change: "+3%" },
    { label: "Active Sessions", value: "15", icon: Calendar, color: "from-orange-500 to-orange-600", change: "+5" },
    { label: "Attendance Rate", value: "87%", icon: TrendingUp, color: "from-[#29B6F6] to-[#1A3A6B]", change: "+3%" },
  ];

  const users = [
    { id: 1, name: "Ahmed Benali", email: "ahmed.b@est-sb.ma", role: "Student", status: "active", avatar: "AB" },
    { id: 2, name: "Prof. Mohammed Karim", email: "m.karim@est-sb.ma", role: "Professor", status: "active", avatar: "MK" },
    { id: 3, name: "Fatima Zahra", email: "fatima.z@est-sb.ma", role: "Student", status: "active", avatar: "FZ" },
    { id: 4, name: "Youssef Amrani", email: "youssef.a@est-sb.ma", role: "Student", status: "inactive", avatar: "YA" },
    { id: 5, name: "Prof. Sarah Ahmed", email: "s.ahmed@est-sb.ma", role: "Professor", status: "active", avatar: "SA" },
    { id: 6, name: "Salma Idrissi", email: "salma.i@est-sb.ma", role: "Student", status: "active", avatar: "SI" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6FA]">
      {/* Desktop Layout */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 bg-gradient-to-b from-[#1A3A6B] via-[#1E5FA8] to-[#1A3A6B] flex-col">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center overflow-hidden">
                <EstLogo size="sm" />
              </div>
              <div>
                <h2 className="text-white font-bold">EST SB</h2>
                <p className="text-white/60 text-xs">Admin Panel</p>
              </div>
            </div>

            <nav className="space-y-2">
              {[
                { icon: Users, label: "User Management", active: true },
                { icon: Calendar, label: "Sessions" },
                { icon: TrendingUp, label: "Analytics" },
                { icon: BookOpen, label: "Modules" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      item.active
                        ? "bg-white/20 text-white border border-white/30"
                        : "text-white/70 hover:bg-white/10"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-8 py-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-[#1A2340]">User Management</h1>
                <p className="text-[#7A8AA0] text-sm">Manage students, professors, and admin accounts</p>
              </div>
              <Button className="bg-gradient-to-r from-[#1E5FA8] to-[#29B6F6] text-white rounded-xl h-11">
                <UserPlus className="h-5 w-5 mr-2" />
                Add User
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xs px-2 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full font-medium">
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-[#1A2340] mb-1">{stat.value}</p>
                    <p className="text-sm text-[#7A8AA0]">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Table Section */}
          <div className="p-8">
            {/* Search & Filters */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#7A8AA0]" />
                  <Input
                    placeholder="Search by name or email..."
                    className="pl-10 h-11 bg-[#F4F6FA] border-0 rounded-xl"
                  />
                </div>
                <Button variant="outline" className="rounded-xl px-6 h-11 border-gray-200">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </Button>
                <Button variant="outline" className="rounded-xl px-6 h-11 border-gray-200">
                  <Download className="h-5 w-5 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* User Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#F4F6FA] border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#1A2340]">User</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#1A2340]">Email</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#1A2340]">Role</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#1A2340]">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#1A2340]">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {users.map((user, index) => (
                      <motion.tr
                        key={user.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-[#F4F6FA]/50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#1E5FA8] to-[#29B6F6] rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-semibold">{user.avatar}</span>
                            </div>
                            <span className="text-[#1A2340] font-medium">{user.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-[#7A8AA0] text-sm">{user.email}</span>
                        </td>
                        <td className="px-6 py-4">
                          <Badge
                            className={`${
                              user.role === "Professor"
                                ? "bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/20"
                                : "bg-[#29B6F6]/10 text-[#29B6F6] border-[#29B6F6]/20"
                            }`}
                          >
                            {user.role}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                user.status === "active" ? "bg-[#4CAF50]" : "bg-gray-400"
                              }`}
                            />
                            <span
                              className={`text-sm capitalize ${
                                user.status === "active" ? "text-[#4CAF50]" : "text-gray-500"
                              }`}
                            >
                              {user.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <button className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors">
                            <MoreVertical className="h-5 w-5 text-[#7A8AA0]" />
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <p className="text-sm text-[#7A8AA0]">Showing 1-6 of 1,332 users</p>
                <div className="flex gap-2">
                  <Button variant="outline" className="rounded-lg h-9 px-4 text-sm border-gray-200">
                    Previous
                  </Button>
                  <Button className="rounded-lg h-9 px-4 text-sm bg-[#1E5FA8] text-white">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View Message */}
      <div className="md:hidden min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-[#1A3A6B] via-[#1E5FA8] to-[#29B6F6]">
        <div className="text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Users className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-white text-2xl font-bold mb-2">Admin Panel</h2>
          <p className="text-white/80 text-sm">
            Please use a tablet or desktop device for the best admin experience
          </p>
        </div>
      </div>
    </div>
  );
}