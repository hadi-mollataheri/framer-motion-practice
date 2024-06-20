import { useState } from 'react';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className='example-button'
      >
        Show/Hide
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ rotate: '0deg' }}
            animate={{ rotate: '180deg' }}
            transition={{
              duration: 2,
              ease: 'backInOut',
            }}
            exit={{ rotate: '0deg' }}
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

