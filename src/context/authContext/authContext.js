import { createContext, useContext, useState } from "react";

// 🔹 AuthContext banaya gaya hai taaki authentication state ko globally manage kiya ja sake
const AuthContext = createContext();

// 🔹 AuthProvider component, jo saare children components ko authentication context provide karega
export const AuthProvider = ({ children }) => {
    // 🔹 currentUser state me logged-in user ki details store hongi
    const [currentUser, setCurrentUser] = useState(null);
    // 🔹 userLoggedIn state track karega ki user logged in hai ya nahi
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    // 🔹 Login function jo API call karega aur user authentication handle karega
    const login = async (email, password) => {
        try {
            const API_URL = process.env.REACT_APP_API_URL; // 🔹 API ka base URL environment variables se fetch kiya ja raha haiclg
            const response = await fetch(`${API_URL}/users/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Login failed");

            // 🔹 User ka authentication token local storage me save karna
            localStorage.setItem("token", data.token);

            // 🔹 User state update karna
            setCurrentUser(data.user);
            setUserLoggedIn(true);
        } catch (error) {
            console.log("error", error)
            throw error; // 🔹 Error ko handle karne ke liye throw kiya
        }
    };

    // 🔹 Logout function jo user ko logout karega
    const logout = () => {
        localStorage.removeItem("token"); // 🔹 Token remove karna
        setCurrentUser(null); // 🔹 User data reset karna
        setUserLoggedIn(false); // 🔹 User ko logged out mark karna
    };

    return (
        // 🔹 AuthContext Provider jo saare components ko authentication data aur functions access karne dega
        <AuthContext.Provider value={{ currentUser, userLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// 🔹 Custom hook jo context ka access easy bana dega
export const useAuth = () => useContext(AuthContext);
