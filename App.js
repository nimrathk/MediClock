import DrugSearch from './components/drugSearch';
import './App.css';
import DrugBottleImage from "./assets/drugbottle.png"; // Adjust the path if needed
import ClipboardImage from "./assets/clipboard.png";

function App() {
  return (
    <div className="container">
      <div className="drug-search-container" style={{ marginTop: '0px', textAlign: 'top', fontFamily: 'Georgia'}}>
            <h1 style={{backgroundColor: 'lightblue', borderRadius: '25px', padding: '20px', display: 'inline-block', fontFamily: 'Lato', fontWeight: '700', minWidth: '500px'}}>
                MediClock
            </h1>
      </div>
      <DrugSearch />
      <img src={DrugBottleImage} className="bottle"></img>
      <img
        src={ClipboardImage}
        className="clipboard"
        style={{ position: 'absolute', bottom: '10px', right: '10px' }}
      />
    </div>
  );
}

export default App;
