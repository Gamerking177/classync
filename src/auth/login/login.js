import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from '../../firebase/auth';
import { useAuth } from '../../context/authContext/authContext';

const InputField = ({ label, type, value, onChange, required }) => (
    <div>
        <label className="text-sm text-gray-600 font-bold">{label}</label>
        <input
            type={type}
            autoComplete={type === 'email' ? 'email' : 'current-password'}
            required={required}
            value={value}
            onChange={onChange}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
        />
    </div>
);

const Login = () => {
    const { userLoggedIn } = useAuth(); // Check if user is already logged in
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [error, setError] = useState(null); // Error state for login errors

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!isSigningIn) {
            setIsSigningIn(true);
            setError(null); // Reset error state

            try {
                await doSignInWithEmailAndPassword(email, password);
            } catch (error) {
                setError('Invalid email or password.'); // Show custom error message
                console.error("Login error:", error.message);
            } finally {
                setIsSigningIn(false); // Reset loading state
            }
        }
    };

    if (userLoggedIn) {
        return <Navigate to="/" replace />; // Redirect to home if logged in
    }

    return (
        <div>
            <main className="w-full h-screen flex items-center justify-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center">
                        <h3 className="mt-2 text-gray-800 text-xl font-semibold sm:text-2xl">Welcome Back</h3>
                    </div>
                    <form onSubmit={onSubmit} className="space-y-5">
                        <InputField 
                            label="Email" 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <InputField 
                            label="Password" 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />

                        {error && (
                            <p className="text-red-500 text-sm text-center" aria-live="assertive">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className={`w-full py-2 text-white font-bold rounded-lg transition duration-300 
                                ${isSigningIn ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                        >
                            {isSigningIn ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                        <circle className="text-indigo-200" cx="12" cy="12" r="10" strokeWidth="4" />
                                        <path className="text-indigo-600" fill="currentColor" d="M4 12c0 1.1.9 2 2 2h1c0-2.21-1.79-4-4-4v2zm16-2c-1.1 0-2 .9-2 2h2c0-1.1-.9-2-2-2zm-2 0c0 2.21 1.79 4 4 4v-2h-1c-1.1 0-2-.9-2-2h-2zm-4 6c2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2v2z" />
                                    </svg>
                                    Signing In...
                                </span>
                            ) : 'Sign In'}
                        </button>
                    </form>
                    <p className="text-center text-sm">
                        Don't have an account? <Link to="/register" className="hover:underline font-bold">Sign up</Link>
                    </p>
                    <p className="text-center text-sm">
                        <Link to="/forgot-password" className="hover:underline">Forgot Password?</Link>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Login;
