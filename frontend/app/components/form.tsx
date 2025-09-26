import React, { useState, useRef, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaTimes } from "react-icons/fa";

interface FormProps {
    onClose: () => void;
}

export default function Form({ onClose }: FormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [formMode, setformMode] = useState(false);

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const lastNameRef = useRef(null);

    useEffect(() => {
        if (formMode) {
            const t = setTimeout(() => lastNameRef.current);
            return () => clearTimeout(t);
        }
    }, [formMode]);

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="flex-col bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg relative w-full max-w-sm">
                <button
                className="absolute top-2 right-2 bg-gray-200 dark:bg-primary-dark rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white cursor-pointer w-8 h-8 flex items-center justify-center text-2xl leading-none"
                onClick={onClose}
                >
                    <FaTimes size={16} color="currentColor" />
                </button>

                <div className="flex-col mt-2 items-center justify-center text-center p-6 w-full mx-auto">        
                    <h1
                    className={`inline-flex items-end mb-12 text-4xl font-bold bg-secondary-light dark:bg-secondary-dark text-gray-800 dark:text-gray-100`}
                    style={{ lineHeight: "1.18" }}
                    >
                        <span className="mr-1">Sign</span>
                        <span
                        className="relative inline-block"
                        style={{ height: "1.18em", width: "2ch" }}
                        >
                            {/* "In" */}
                            <span
                            className="absolute left-0 bottom-0 w-full flex items-end justify-center"
                            style={{
                                transform: formMode ? "translateY(-100%)" : "translateY(0%)",
                                filter: formMode ? "blur(2px)" : "blur(0px)", // blur while moving
                                opacity: formMode ? 0 : 1,                  // optional: fade out while moving
                                transition: "transform 200ms ease-in-out, opacity 200ms, filter 100ms ease-in-out",
                            }}
                            >
                                In
                            </span>


                            {/* "Up" */}
                            <span
                            className="absolute left-0 bottom-0 w-full flex items-end justify-center"
                            style={{
                                transform: formMode ? "translateY(0%)" : "translateY(100%)",
                                filter: formMode ? "blur(0px)" : "blur(2px)",
                                opacity: formMode ? 1 : 0,
                                transition: "transform 200ms ease-in-out, opacity 200ms, filter 100ms ease-in-out",
                            }}
                            >
                                Up
                            </span>
                        </span>

                    </h1>



                    {/* Input fields */}
                    <div
                    className={`flex rounded-lg opacity-100 w-full items-start transition-all duration-600 ease-in-out
                        ${formMode ? "max-h-40 mb-4 opacity-100 gap-2" : "max-h-0 mb-0 opacity-0 gap-0"}`}
                    >
                        {/* First Name */}
                        <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                        aria-label="First Name"
                        style={{
                            opacity: formMode ? "1" : "0",
                            transition: "opacity 760ms",
                        }}
                        className="p-2 w-[50%] rounded-lg bg-white focus:outline-none shadow-lg border border-gray-200 dark:border-gray-600"
                        />

                        {/* Last Name */}
                        <input
                        ref={lastNameRef}
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                        aria-label="Last Name"
                        style={{
                            opacity: formMode ? "1" : "0",
                            transition: "opacity 760ms",
                        }}
                        className={`p-2 w-[50%] rounded-lg bg-white focus:outline-none shadow-lg border border-gray-200 dark:border-gray-600`}
                        />
                    </div>

                    <div className="relative w-full shadow-lg rounded-lg overflow-hidden mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 pr-10 rounded-lg bg-white focus:outline-none border border-gray-200 shadow-lg transform transition-all duration-500"
                        />
                    </div>



                    <div className="relative rounded-lg w-full mb-6">
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
                        {formMode ? "Sign Up" : "Sign In"}
                        <span
                            className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                        >
                            &rarr;
                        </span>
                    </button>

                </div>


                <div className="flex items-center w-fit mx-auto mb-6">
                    <p className="text-gray-500 dark:text-gray-300 text-xs">
                        {formMode ? "Already" : "Don't"} have an account?{" "}
                        <button
                            className="text-gray-600 dark:text-gray-200 text-xs hover:underline font-semibold cursor-pointer"
                            onClick={() => setformMode((s) => !s)}
                            aria-pressed={formMode}
                            aria-label={formMode ? "Sign in" : "Sign up"}
                        >
                            {formMode ? "Sign in" : "Sign Up"}
                        </button>
                    </p>
                </div>


            </div>
        </div>
    );
}