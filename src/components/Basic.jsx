import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Basic() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className='example-button'
        style={{
          background: 'rgb(86, 1, 245)',
          color: 'white',
          fontSize: '1.8rem',
          borderRadius: '0.4rem',
          border: 'none',
          padding: '0.4rem 0.8rem',
          cursor: 'pointer',
        }}
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode='popLayout'>
        {isVisible && (
          <motion.div
            initial={{
              scale: 0,
              rotate: '0deg',
            }}
            animate={{
              scale: 1,
              rotate: '180deg',
              y: [0, 80,  0],
            }}
            exit={{
              scale: 0,
              rotate: '0deg',
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
              times: [0, .7, 1],
            }}
            style={{
              width: 150,
              height: 150,
              background: 'black',
              margin: 10,
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Basic;
