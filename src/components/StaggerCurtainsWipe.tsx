import React from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface CurtainTransitionProps {
  columns?: number;
  transitionKey: number | string;
  children?: React.ReactNode;
}

export const StaggerCurtainsWipe: React.FC<CurtainTransitionProps> = ({
  columns = 15,
  transitionKey,
  children,
}) => {
  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: 1,   // 1: Left to right | -1: Right to left
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const curtainColumnVariants: Variants = {
    initial: {
      scaleY: 1,      // 100% of the height
      originY: 0,
    },
    animate: {
      scaleY: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
    exit: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-950 text-white">
      {/* Overlay Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={transitionKey}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="pointer-events-none absolute inset-0 z-50 grid w-full h-full"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: columns }).map((_, i) => (
            <motion.div
              key={i}
              variants={curtainColumnVariants}
              className="w-full h-full bg-indigo-600 origin-top border-r border-indigo-500/20"
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <main className="relative z-10 flex flex-col items-center justify-center h-full gap-6 p-8 text-center">
        {children}
      </main>
    </div>
  );
};

export default StaggerCurtainsWipe;
