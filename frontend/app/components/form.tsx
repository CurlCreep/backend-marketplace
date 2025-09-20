import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaTimes } from "react-icons/fa";

interface FormProps {
    onClose: () => void;
}

export default function Form({ onClose }: FormProps) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="flex-col bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg relative w-full max-w-sm">
                <button
                className="absolute top-2 right-2 bg-gray-200 dark:bg-primary-dark rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white cursor-pointer w-8 h-8 flex items-center justify-center text-2xl leading-none"
                onClick={onClose}
                >
                    <FaTimes size={16} color="currentColor" />
                </button>

                <div className="flex-col mt-2 items-center justify-center text-center p-4 w-fit mx-auto">        
                    <h1 className="text-3xl font-bold mb-8 bg-secondary-light dark:bg-secondary-dark text-gray-800 dark:text-gray-100">
                        Sign in
                    </h1>
                    {/* Input fields */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 mb-4 rounded-lg bg-white focus:outline-none shadow-lg border border-gray-200"
                    />
                    <div className="relative w-full mb-6">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full p-2 pr-10 rounded-lg bg-white focus:outline-none shadow-lg border border-gray-200"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-secondary-dark cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    <button
                    type="button"
                    className="relative overflow-hidden cursor-pointer w-full bg-primary-dark text-white dark:bg-secondary-gray p-3 rounded-lg shadow-lg group"
                    >
                        Sign In
                        <span
                            className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                        >
                            &rarr;
                        </span>
                    </button>

                </div>


                <div className="flex items-center w-fit mx-auto mb-6">
                    <p className="text-gray-500 dark:text-gray-300 text-xs">
                        Don't have an account?{" "}
                        <button
                        className="text-gray-500 dark:text-gray-300 text-xs hover:underline font-semibold cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </p>
                </div>


            </div>
        </div>
    );
}