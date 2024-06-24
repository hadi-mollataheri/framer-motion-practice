import Basic from './components/Basic';
import Gestures from './components/Gestures';
import AnimationControls from './components/AnimationControls';
import './App.css';
import ViewBasedAnimations from './components/ViewBasedAnimations';

function App() {
  return (
    <div className='container'>
      <Basic />
      <Gestures />
      <AnimationControls />
      <ViewBasedAnimations />
    </div>
  );
}

export default App;

