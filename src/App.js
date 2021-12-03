import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Skills from './pages/skills';
function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
