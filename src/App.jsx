import './App.css';
import {
  Attention,
  Events,
  Main,
  InfoBlock,
  Location,
  Contacts,
  Timeout,
  GalleryFirst,
  Colors,
} from './components/index';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// https://ibb.co/album/q3Kc7b album-link

function App() {
  return (
    <div className="App">
      <Main />
      <InfoBlock />
      <GalleryFirst />
      <Location />
      <Events />
      <Colors />
      <Attention />
      <Timeout />
      <Contacts />
    </div>
  );
}

export default App;
