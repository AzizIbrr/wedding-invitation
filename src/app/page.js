"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setLoading(true);
    router.push("/details");
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="fixed inset-0">
        <Image
          src="/Desktop.jpg?height=1920&width=1080"
          alt="Wedding background"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between p-6 text-center text-white md:p-12 lg:p-24">
        {/* Header */}
        <div className="w-full pt-8 font-montserrat text-sm tracking-widest md:text-base lg:text-lg">
          WEDDING ANNOUNCEMENT
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-8">
          <h1 className="invitation-text font-playfair text-4xl font-medium md:text-5xl lg:text-6xl">
            TIFFANY & JARED
          </h1>
          <p className="invitation-text font-montserrat text-xl tracking-wider md:text-2xl lg:text-3xl">
            #TimetoshaRE
          </p>
        </div>

        {/* Button */}
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-white"
          >
            <div className="loader">Loading...</div>
          </motion.div>
        ) : (
          <motion.button
            onClick={handleOpen}
            className="mb-8 rounded-md bg-white/20 px-12 py-3 font-montserrat text-sm uppercase tracking-wider backdrop-blur-sm transition-all hover:bg-white/30 md:px-16 md:py-4 md:text-base lg:px-20 lg:py-5 lg:text-lg"
          >
            Open
          </motion.button>
        )}
      </div>
    </main>
  );
}