import { useState } from 'react';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className='example-button'
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
            }}
            exit={{
              scale: 0,
              rotate: '0deg',
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
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

export default App;

