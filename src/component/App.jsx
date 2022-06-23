import { AppBar } from "./AppBar";
import { VideoInfo } from "./VideoInfo";
import { VideoPlayer } from "./VideoPlayer";

export const App = () => {
  return (
    <div>
      <AppBar />
      <VideoPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      <VideoInfo
        title="You Are Not Where You Think You Are"
        views={5709844}
        uploaDate="May 17, 2022"
      />
    </div>
  );
};

/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
