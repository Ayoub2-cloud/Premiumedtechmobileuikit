import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { X, Users, Clock, CheckCircle2, ChevronLeft, UserCheck, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import BottomNav from "../components/BottomNav";

export default function QRCodeSession() {
  const navigate = useNavigate();
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [attendedStudents, setAttendedStudents] = useState<string[]>([
    "Ahmed Benali",
    "Fatima Zahra",
    "Youssef Amrani",
    "Salma Idrissi",
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const sessionData = {
    course: "Data Structures",
    room: "C106",
    time: "10:00 - 12:00",
    totalStudents: 42,
  };

  const recentStudents = [
    { name: "Ahmed Benali", time: "Just now", avatar: "AB" },
    { name: "Fatima Zahra", time: "2 min ago", avatar: "FZ" },
    { name: "Youssef Amrani", time: "3 min ago", avatar: "YA" },
    { name: "Salma Idrissi", time: "5 min ago", avatar: "SI" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6FA] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1A3A6B] via-[#1E5FA8] to-[#29B6F6] rounded-b-[2rem] pb-6 pt-12 px-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-white text-2xl font-bold">Active Session</h1>
            <p className="text-white/80 text-sm">{sessionData.course}</p>
          </div>
          <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
            <X className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Session Info */}
        <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between text-white/90 text-sm">
            <span>Room {sessionData.room}</span>
            <span>{sessionData.time}</span>
          </div>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* QR Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
        >
          {/* Animated QR Code */}
          <div className="relative mx-auto w-64 h-64 mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E5FA8]/5 to-[#29B6F6]/5 rounded-2xl" />
            <div className="relative w-full h-full bg-white rounded-2xl p-4 flex items-center justify-center border-2 border-[#1E5FA8]/20">
              {/* Mock QR Code Pattern */}
              <div className="grid grid-cols-8 gap-1 w-full h-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-sm ${
                      Math.random() > 0.5 ? "bg-[#1A3A6B]" : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Session Code */}
          <div className="text-center mb-4">
            <p className="text-sm text-[#7A8AA0] mb-2">Session Code</p>
            <div className="inline-flex items-center gap-2 bg-[#F4F6FA] px-6 py-3 rounded-xl">
              <span className="text-2xl font-bold text-[#1E5FA8] tracking-wider">
                DS-2026-311
              </span>
            </div>
          </div>

          {/* Refresh Button */}
          <Button
            className="w-full bg-gradient-to-r from-[#1E5FA8] to-[#29B6F6] text-white rounded-xl h-12 hover:from-[#1a5494] hover:to-[#25a5dd]"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            Refresh QR Code
          </Button>
        </motion.div>

        {/* Timer & Stats */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center">
                <Clock className="h-5 w-5 text-orange-500" />
              </div>
            </div>
            <p className="text-3xl font-bold text-[#1A2340]">{formatTime(timeElapsed)}</p>
            <p className="text-sm text-[#7A8AA0]">Time Elapsed</p>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: `${(timeElapsed / 600) * 100}%` }}
                className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center">
                <UserCheck className="h-5 w-5 text-[#4CAF50]" />
              </div>
            </div>
            <p className="text-3xl font-bold text-[#4CAF50]">
              {attendedStudents.length}/{sessionData.totalStudents}
            </p>
            <p className="text-sm text-[#7A8AA0]">Students Present</p>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(attendedStudents.length / sessionData.totalStudents) * 100}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Recent Check-ins */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#1A2340] font-semibold">Recent Check-ins</h3>
            <div className="flex items-center gap-1 px-3 py-1 bg-[#4CAF50]/10 rounded-full">
              <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse" />
              <span className="text-xs text-[#4CAF50] font-medium">Live</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-3">
            {recentStudents.map((student, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#1E5FA8] to-[#29B6F6] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">{student.avatar}</span>
                </div>
                <div className="flex-1">
                  <p className="text-[#1A2340] font-medium text-sm">{student.name}</p>
                  <p className="text-xs text-[#7A8AA0]">{student.time}</p>
                </div>
                <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center">
                  <UserCheck className="h-4 w-4 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* End Session Button */}
        <Button
          variant="outline"
          className="w-full border-red-200 text-red-500 rounded-xl h-12 hover:bg-red-50"
        >
          End Session
        </Button>
      </div>

      <BottomNav userType="professor" />
    </div>
  );
}