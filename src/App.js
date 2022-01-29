import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux'
import modeReducer, { darkMode, lightMode } from './features/modeSlice.js'

function App() {

  const mode = useSelector((state) => state.mode)
  const dispatch = useDispatch()

  const toggleMode = () => {
    mode.darkMode ? dispatch(lightMode()) : dispatch(darkMode())
  }

  return (
    <div style={{ backgroundColor: mode.color1, color: 'black' }} className="App">
      <Nav />
      <button onClick={toggleMode} >{modeReducer.darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
