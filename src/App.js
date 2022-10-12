import './App.css';

function App() {
  console.log("I am the web app!")
  let userId = window.location.search.slice(10)
  console.log('userId:', userId)
  return (
    <div className="App">
      <h1 className="header">GB test</h1>
    </div>
  );
}

export default App;
