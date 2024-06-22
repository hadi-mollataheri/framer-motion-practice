import { motion } from 'framer-motion';

function Gestures() {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.09 }}
        whileTap={{
          scale: 0.95,
          rotate: '2.9deg',
        }}
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
        Click me!
      </motion.button>
    </div>
  );
}

export default Gestures;
