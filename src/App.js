import './App.css';
import Education from './components/Education';
import Header from './components/Header';
import LandPage from './components/LandPage';
import Skills from './components/Skills';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
    <div className="App">
      <Header/>
      <LandPage/>
      <Education/>
      <Skills/>
    </div>
  );
}

export default App;
