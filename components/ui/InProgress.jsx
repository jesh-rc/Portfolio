"use client";

import { motion } from "framer-motion";

const InProgress = ({ label = "In Progress" }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-white/5 rounded-lg">
      
      {/* animated dots */}
      <div className="flex gap-3">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-3 h-3 rounded-full bg-accent"
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* text */}
      <motion.p
        className="text-white/70 text-sm tracking-wide uppercase"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {label}
      </motion.p>
    </div>
  );
};

export default InProgress;
