import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
