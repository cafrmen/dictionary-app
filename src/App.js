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

        <br />
        
        <footer>
          <small>
            <a href="https://github.com/cafrmen/dictionary-app" target="_blank" rel="noreferrer">Open source </a>
            by Caf. Hosted at
            <a
              href="https://distracted-bhabha-6b1eea.netlify.app"
              target="_blank" rel="noreferrer"> Netlify.
            </a>
          </small>
        </footer>

      </div>
    </div>
  );
}
