import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, Calendar, Clock, CheckCircle2, XCircle, Filter } from "lucide-react";
import { useNavigate } from "react-router";
import BottomNav from "../components/BottomNav";
import { Button } from "../components/ui/button";

export default function AttendanceHistory() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const attendanceRecords = [
    {
      id: 1,
      course: "Computer Science",
      date: "2026-03-11",
      time: "08:00 AM",
      status: "present",
      room: "C105",
    },
    {
      id: 2,
      course: "Mathematics",
      date: "2026-03-11",
      time: "10:00 AM",
      status: "present",
      room: "A101",
    },
    {
      id: 3,
      course: "Physics",
      date: "2026-03-10",
      time: "14:00 PM",
      status: "absent",
      room: "B203",
    },
    {
      id: 4,
      course: "Chemistry",
      date: "2026-03-10",
      time: "08:00 AM",
      status: "present",
      room: "D301",
    },
    {
      id: 5,
      course: "English",
      date: "2026-03-09",
      time: "10:00 AM",
      status: "present",
      room: "E102",
    },
    {
      id: 6,
      course: "History",
      date: "2026-03-09",
      time: "14:00 PM",
      status: "absent",
      room: "F205",
    },
    {
      id: 7,
      course: "Computer Science",
      date: "2026-03-08",
      time: "08:00 AM",
      status: "present",
      room: "C105",
    },
    {
      id: 8,
      course: "Mathematics",
      date: "2026-03-08",
      time: "10:00 AM",
      status: "present",
      room: "A101",
    },
  ];

  const filteredRecords = attendanceRecords.filter((record) => {
    if (filter === "all") return true;
    return record.status === filter;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-[#F4F6FA] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1A3A6B] via-[#1E5FA8] to-[#29B6F6] rounded-b-[2rem] pb-8 pt-12 px-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-white text-2xl font-bold">Attendance History</h1>
            <p className="text-white/80 text-sm">Track your attendance records</p>
          </div>
          <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
            <Filter className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all ${
              filter === "all"
                ? "bg-white text-[#1E5FA8]"
                : "bg-white/20 text-white border border-white/30"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("present")}
            className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all ${
              filter === "present"
                ? "bg-white text-[#4CAF50]"
                : "bg-white/20 text-white border border-white/30"
            }`}
          >
            Present
          </button>
          <button
            onClick={() => setFilter("absent")}
            className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all ${
              filter === "absent"
                ? "bg-white text-red-500"
                : "bg-white/20 text-white border border-white/30"
            }`}
          >
            Absent
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 mt-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center"
          >
            <p className="text-2xl font-bold text-[#1E5FA8]">{attendanceRecords.length}</p>
            <p className="text-xs text-[#7A8AA0]">Total</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center"
          >
            <p className="text-2xl font-bold text-[#4CAF50]">
              {attendanceRecords.filter((r) => r.status === "present").length}
            </p>
            <p className="text-xs text-[#7A8AA0]">Present</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center"
          >
            <p className="text-2xl font-bold text-red-500">
              {attendanceRecords.filter((r) => r.status === "absent").length}
            </p>
            <p className="text-xs text-[#7A8AA0]">Absent</p>
          </motion.div>
        </div>

        {/* Records List */}
        <div className="space-y-3">
          {filteredRecords.map((record, index) => (
            <motion.div
              key={record.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4">
                {/* Status Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    record.status === "present"
                      ? "bg-[#4CAF50]/10"
                      : "bg-red-500/10"
                  }`}
                >
                  {record.status === "present" ? (
                    <CheckCircle2 className="h-6 w-6 text-[#4CAF50]" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-500" />
                  )}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-[#1A2340] font-semibold">
                      {record.course}
                    </h4>
                    <Badge
                      className={`${
                        record.status === "present"
                          ? "bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/20"
                          : "bg-red-500/10 text-red-500 border-red-500/20"
                      }`}
                    >
                      {record.status === "present" ? "Present" : "Absent"}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-[#7A8AA0]">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(record.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{record.time}</span>
                    </div>
                  </div>

                  <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-[#F4F6FA] rounded-lg">
                    <span className="text-xs text-[#7A8AA0]">Room:</span>
                    <span className="text-xs text-[#1A2340] font-medium">
                      {record.room}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredRecords.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-[#F4F6FA] rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-10 w-10 text-[#7A8AA0]" />
            </div>
            <p className="text-[#7A8AA0]">No records found</p>
          </div>
        )}
      </div>

      <BottomNav userType="student" />
    </div>
  );
}