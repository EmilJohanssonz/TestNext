"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import "./globals.css";
import Link from "next/link";

const StartPage = () => {
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setShowButton(true), 3000);
  }, []);

  return (
    <>
      <div className="relative h-screen flex items-center justify-center bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/brendan-miranda-0K1C90geDao-unsplash.jpg')",
          }}
        ></div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-white text-5xl md:text-7xl font-serif italic z-10 drop-shadow-lg"
          style={{
            textShadow: "0 0 10px #facc15, 0 0 20px #facc15, 0 0 30px #facc15",
            animation: "glow 2s infinite alternate",
          }}
        >
          One Ring to Rule Them All
        </motion.h1>

        <Link href="/book">
          {showButton && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              onClick={() => router.push("/book")}
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 px-6 py-3 text-lg md:text-xl font-semibold text-white bg-yellow-600 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
            >
              Enter Middle-Earth
            </motion.button>
          )}
        </Link>
      </div>
      <style>
        {`
            @keyframes glow {
              from {
                text-shadow: 0 0 10px #facc15, 0 0 20px #facc15, 0 0 30px #facc15;
              }
              to {
                text-shadow: 0 0 15px #ffcc00, 0 0 30px #ffcc00, 0 0 45px #ffcc00;
              }
            }
          `}
      </style>
    </>
  );
};

export default StartPage;
