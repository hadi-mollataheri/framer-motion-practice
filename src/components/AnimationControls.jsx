import { motion, useAnimationControls } from 'framer-motion';

const variants = {
  initial: {
    rotate: '0deg',
  },
  flip: {
    rotate: '360deg',
  },
};

function AnimationControls() {
  const flipControls = useAnimationControls();

  const handleClick = () => {
    flipControls.start('flip');
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          background: 'rgb(86, 1, 245)',
          color: 'white',
          fontSize: '1.8rem',
          borderRadius: '0.4rem',
          border: 'none',
          padding: '0.4rem 0.8rem',
          cursor: 'pointer',
          margin: '10px auto',
          width: '100%',
        }}
      >
        Flip it!
      </button>
      <motion.div
        variants={variants}
        initial='initial'
        animate={flipControls}
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

export default AnimationControls;
