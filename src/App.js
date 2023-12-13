import './App.css';
import Accordion from './compornents/Accordion';
import Footer from './compornents/Footer';
import Header from './compornents/Header';
import About from './compornents/About';
import Privacy from './compornents/Privacy';
import Disclaimer from './compornents/Disclaimer';
import Mail from './compornents/Mail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Success from './compornents/Success';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />

      <Routes> {/*中身だけコンポーネントにして切り替え*/}
       <Route path='/' element={<Accordion />}/>
       <Route path='/about' element={<About />}/>
       <Route path='/privacy' element={<Privacy />}/>
       <Route path='/disclaimer' element={<Disclaimer />}/>
       <Route path='/mail' element={<Mail />}/>
       <Route path='/success' element={<Success />}/>
      </Routes>

      <Footer />
      </div>
    </Router>
  );
}

export default App;
