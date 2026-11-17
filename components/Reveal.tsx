import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  /** Kept for backwards compatibility with existing pages; layout is always block. */
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string;
}

/**
 * Subtle fade-in on first scroll into view. Short distance and duration on purpose:
 * motion should confirm structure, not perform. Disabled under prefers-reduced-motion
 * via the root <MotionConfig reducedMotion="user">.
 */
export const Reveal: React.FC<Props> = ({ children, delay = 0, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.45, delay: Math.min(delay, 0.3), ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);
