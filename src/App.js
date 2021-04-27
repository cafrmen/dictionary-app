import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 className="title">DICTIONARY</h1> 
        </header>

        <br />
        
        <main>
          <Dictionary />
        </main>

      </div>
    </div>
  );
}
