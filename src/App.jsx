import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div>
      <button className='example-button'>Show/Hide</button>
      <motion.div
        initial={{ rotate: '0deg' }}
        animate={{ rotate: '180deg' }}
        transition={{
          duration: 2
        }}
        style={{
          width: 150,
          height: 150,
          background: 'black',
          margin: 10,
        }}
      ></motion.div>
    </div>
  );
}

export default App;

