import { motion, MotionConfig } from 'framer-motion';

function Gestures() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MotionConfig
        whileHover={{ scale: 1.12 }}
        whileTap={{
          scale: 0.84,
          rotate: '10deg',
        }}
        transition={{
          duration: 0.101,
          ease: 'easeInOut',
        }}
      >
        <motion.button
          style={{
            background: 'rgb(86, 1, 245)',
            color: 'white',
            fontSize: '1.8rem',
            borderRadius: '0.4rem',
            border: 'none',
            padding: '0.4rem 0.8rem',
            cursor: 'pointer',
            margin: '10px 0px',
          }}
        >
          Click me!
        </motion.button>

        <motion.button
          style={{
            background: 'rgb(86, 1, 245)',
            color: 'white',
            fontSize: '1.8rem',
            borderRadius: '0.4rem',
            border: 'none',
            padding: '0.4rem 0.8rem',
            cursor: 'pointer',
          }}
        >
          Click mee!
        </motion.button>
      </MotionConfig>
    </div>
  );
}

export default Gestures;
