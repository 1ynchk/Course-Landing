import './App.css';
import './css/header.css'
import './css/welcomepage.css'
import './css/statistics.css'
import './css/teachers.css'

import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import Statistics from './components/Statistics';
import Teachers from './components/Teachers';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <WelcomePage />
      </div>
      <Statistics />
      <Teachers />
    </div>
  );
}

export default App;
