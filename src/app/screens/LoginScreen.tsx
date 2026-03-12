import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import EstLogo from "../components/EstLogo";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Mock login - navigate to student dashboard
    navigate("/student");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A3A6B] via-[#1E5FA8] to-[#29B6F6] flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex bg-white rounded-full p-4 mb-6 shadow-2xl border-4 border-white/30">
            <EstLogo size="lg" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-white/80">Sign in to continue</p>
        </div>

        {/* Login Card with Glassmorphism */}
        <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
          <div className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
                <Input
                  type="email"
                  placeholder="student@est-sb.ma"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 transition-all h-12 rounded-xl"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 pr-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 transition-all h-12 rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="border-white/40 data-[state=checked]:bg-[#4CAF50] data-[state=checked]:border-[#4CAF50]"
                />
                <label htmlFor="remember" className="text-sm text-white/80 cursor-pointer">
                  Remember me
                </label>
              </div>
              <button className="text-sm text-white/80 hover:text-white transition-colors">
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <Button
              onClick={handleLogin}
              className="w-full h-12 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] hover:from-[#45a049] hover:to-[#276f2b] text-white rounded-xl shadow-lg transition-all transform hover:scale-[1.02]"
            >
              Sign In
            </Button>

            {/* Role Switcher */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-white/60 text-sm text-center mb-3">Quick Access</p>
              <div className="flex gap-2">
                <button
                  onClick={() => navigate("/student")}
                  className="flex-1 py-2 text-xs bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
                >
                  Student
                </button>
                <button
                  onClick={() => navigate("/professor")}
                  className="flex-1 py-2 text-xs bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
                >
                  Professor
                </button>
                <button
                  onClick={() => navigate("/admin")}
                  className="flex-1 py-2 text-xs bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
                >
                  Admin
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-white/60 text-sm mt-6">
          © 2026 EST Sidi Bennour - All rights reserved
        </p>
      </motion.div>
    </div>
  );
}