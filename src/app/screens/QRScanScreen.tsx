import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QrCode, CheckCircle2, XCircle, Camera, ChevronLeft, FlipHorizontal } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import BottomNav from "../components/BottomNav";

export default function QRScanScreen() {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<"success" | "error" | null>(null);

  const handleScan = () => {
    setScanning(true);
    // Simulate scanning
    setTimeout(() => {
      setScanning(false);
      setResult("success"); // or "error" for failure
      setTimeout(() => setResult(null), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4F6FA] to-[#E8EDF5] pb-20">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-br from-[#1A3A6B] via-[#1E5FA8] to-[#29B6F6] rounded-b-[2.5rem] pb-8 pt-12 px-6 shadow-xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 transition-all shadow-lg"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <div>
              <h1 className="text-white text-2xl font-bold">Scan QR Code</h1>
              <p className="text-white/80 text-sm">Mark your attendance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Camera Preview (Mock) */}
      <div className="relative h-screen w-full">
        {/* Simulated camera background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A6B]/50 via-[#1E5FA8]/30 to-[#29B6F6]/50" />
        
        {/* Scanning Frame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Corner Borders */}
            <div className="w-64 h-64 relative">
              {/* Top Left */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-[#4CAF50] rounded-tl-2xl" />
              {/* Top Right */}
              <div className="absolute top-0 right-0 w-12 h-12 border-r-4 border-t-4 border-[#4CAF50] rounded-tr-2xl" />
              {/* Bottom Left */}
              <div className="absolute bottom-0 left-0 w-12 h-12 border-l-4 border-b-4 border-[#4CAF50] rounded-bl-2xl" />
              {/* Bottom Right */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-[#4CAF50] rounded-br-2xl" />
              
              {/* Scanning Line Animation */}
              {scanning && (
                <motion.div
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4CAF50] to-transparent"
                  animate={{
                    top: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}
            </div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center"
            >
              <p className="text-white text-lg mb-2">Position QR code in frame</p>
              <p className="text-white/70 text-sm">Scanning will happen automatically</p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-28 left-0 right-0 px-6">
          <div className="flex items-center justify-center gap-4">
            <button className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
              <FlipHorizontal className="h-6 w-6 text-white" />
            </button>
            
            <button
              onClick={handleScan}
              className="w-20 h-20 bg-[#4CAF50] rounded-full flex items-center justify-center shadow-lg hover:bg-[#45a049] transition-colors"
            >
              <Camera className="h-10 w-10 text-white" />
            </button>

            <button className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {result === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-30"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-3xl p-8 mx-6 max-w-sm text-center"
            >
              <div className="w-20 h-20 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-12 w-12 text-[#4CAF50]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1A2340] mb-2">Success!</h2>
              <p className="text-[#7A8AA0] mb-1">Attendance marked for</p>
              <p className="text-[#1E5FA8] font-semibold mb-4">Computer Science - Room C105</p>
              <div className="bg-[#F4F6FA] rounded-xl p-3 mb-4">
                <p className="text-sm text-[#7A8AA0]">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <Button
                onClick={() => setResult(null)}
                className="w-full bg-gradient-to-r from-[#1E5FA8] to-[#29B6F6] text-white rounded-xl h-12"
              >
                Continue
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav userType="student" />
    </div>
  );
}