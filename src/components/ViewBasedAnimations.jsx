import { motion } from 'framer-motion';

const ViewBasedAnimations = () => {
  return (
    <>
      <div style={{ height: '101vh' }} />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        style={{ height: '1000px', width: '100%', backgroundColor: 'green' }}
      />
    </>
  );
};

export default ViewBasedAnimations;
