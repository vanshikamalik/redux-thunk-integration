import logo from './logo.svg';
import './App.css';
import  Test from './test'
import ProductListing from './Components/ProductListing'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ProductListing />
        {/* <Test /> */}
      </header>
    </div>
  );
}

export default App;
