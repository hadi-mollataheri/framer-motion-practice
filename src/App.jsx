import Basic from './components/Basic';
import Gestures from './components/Gestures';
import AnimationControls from './components/AnimationControls';
import './App.css';
import ViewBasedAnimations from './components/ViewBasedAnimations'
import ScrollAnimations from './components/ScrollAnimations';

function App() {
  return (
    <div className='container'>
      <Basic />
      <Gestures />
      <AnimationControls />
      <ViewBasedAnimations />
      <ScrollAnimations />
    </div>
  );
}

export default App;

