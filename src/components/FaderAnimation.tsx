"use client";

import { motion } from "framer-motion";

export function FaderAnimation() {
  return (
    <div className="flex items-end justify-center gap-4 h-48">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="relative w-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
        >
          <div className="absolute inset-x-0 h-40 bg-border/50 rounded-full" />
          <motion.div
            className="absolute inset-x-1 h-12 bg-gradient-to-b from-accent to-accent/70 rounded-full shadow-lg shadow-accent/20"
            animate={{
              y: [0, 80, 40, 100, 20, 60],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.7,
            }}
          />
          <div className="absolute -bottom-6 inset-x-0 text-center text-xs text-muted">
            {index + 1}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
