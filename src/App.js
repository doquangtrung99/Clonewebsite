import './App.scss';
import Wrapper from './components/Wrapper';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from '../src/components/Navigation'
import Home from '../src/components/Home'
function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/workwithus" element={<Wrapper />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
