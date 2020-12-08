import './App.css';
import Header from './Header/Header';
import Projects from './Content/Content';
import Footer from './Footer/Footer';
import Profile from './Profile/Profile';
import BeckoningArrow from './Beckoning/Arrow';

function App() {
  // god
  return (
    <div className="App">
        <Header />
        <Profile />
        <Projects />
        <Footer />
        <BeckoningArrow />
    </div>
  );
}

export default App;
