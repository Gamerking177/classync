import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext/authContext"; // 🔹 Import authentication context
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"; // 🔹 Import Framer Motion for animations

const Login = () => {
    const { userLoggedIn, login } = useAuth(); // 🔹 Getting authentication functions
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false); // 🔹 State for password visibility

    useEffect(() => {
        if (userLoggedIn) {
            navigate("/"); // 🔹 Redirect user if already logged in
        }
    }, [userLoggedIn, navigate]);

    const validateForm = () => {
        if (!email || !password) {
            setError("Email and Password are required.");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email format.");
            return false;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return false;
        }
        return true;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn && validateForm()) {
            setIsSigningIn(true);
            setError(null);

            try {
                await login(email, password); // 🔹 Calling login function from auth context
            } catch (error) {
                setError(error.message || "Invalid email or password.");
                console.error("Login error:", error.message);
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    return (
        <main className="w-full h-screen flex items-center justify-center">

            
            {/* 🔹 Animated Login Form */}
            <motion.div 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl"
            >
                <div className="text-center">
                    <h3 className="mt-2 text-gray-800 text-xl font-semibold sm:text-2xl">Welcome Back</h3>
                </div>
                <form onSubmit={onSubmit} className="space-y-5">
                    <div>
                        <label className="text-sm text-gray-600 font-bold">Email</label>
                        <input
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                        />
                    </div>
                    
                    {/* 🔹 Password Field with Show/Hide Toggle */}
                    <div className="relative">
                        <label className="text-sm text-gray-600 font-bold">Password</label>
                        <input
                            type={showPassword ? "text" : "password"} 
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300 pr-10"
                        />
                        {/* 👁 Password Visibility Toggle */}
                        <motion.span 
                            className="absolute top-10 right-3 cursor-pointer text-gray-500 hover:text-indigo-600 transition"
                            onClick={() => setShowPassword(!showPassword)}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} size="lg" />
                        </motion.span>
                    </div>

                    {error && <p className="text-red-500 text-sm text-center" aria-live="assertive">{error}</p>}

                    {/* 🔹 Submit Button with Animation */}
                    <motion.button
                        type="submit"
                        disabled={isSigningIn}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-2 text-white font-bold rounded-lg transition duration-300 
                            ${isSigningIn ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"}`}
                    >
                        {isSigningIn ? "Signing In..." : "Sign In"}
                    </motion.button>
                </form>

                <p className="text-center text-sm">
                    Don't have an account? <Link to="/register" className="hover:underline font-bold">Sign up</Link>
                </p>
                <p className="text-center text-sm">
                    <Link to="/forgot-password" className="hover:underline">Forgot Password?</Link>
                </p>
            </motion.div>
        </main>
    );
};

export default Login;
