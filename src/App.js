import './App.css';
import Header from './Header/Header';
import Projects from './Content/Content';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
