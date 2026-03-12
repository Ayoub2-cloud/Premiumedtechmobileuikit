import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import EstLogo from "../components/EstLogo";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1A3A6B] via-[#1E5FA8] to-[#29B6F6] overflow-hidden">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl mb-6 shadow-2xl border border-white/20">
          <EstLogo size="xl" />
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-2">EST SB</h1>
          <p className="text-xl text-white/90 mb-1">Smart Attendance</p>
          <p className="text-sm text-white/70">École Supérieure de Technologie</p>
          <p className="text-sm text-white/70">Sidi Bennour</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8"
      >
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: "0s" }} />
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>
      </motion.div>
    </div>
  );
}