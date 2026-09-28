import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);

  const ringX = useSpring(cursorX, { stiffness: 250, damping: 28, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 250, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setHidden(true);
      return;
    }

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest('a, button, [data-cursor="hover"], input, textarea, label'));
    };

    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
    };
  }, [cursorX, cursorY]);

  if (hidden) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="rounded-full"
          style={{ translateX: '-50%', translateY: '-50%' }}
          animate={{
            width: hovering ? 52 : 32,
            height: hovering ? 52 : 32,
            borderColor: hovering ? 'rgba(249,115,22,1)' : 'rgba(249,115,22,0.55)',
            borderWidth: hovering ? 1.5 : 1,
            borderStyle: 'solid',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="rounded-full bg-primary"
          style={{ translateX: '-50%', translateY: '-50%', width: 7, height: 7 }}
          animate={{ scale: hovering ? 0.4 : 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        />
      </motion.div>
    </>
  );
}
