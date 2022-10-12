import './App.css';

function App() {
  // let userId= window.App.state.user.id
  // console.log(userId)
  console.log("I am the web app!")
  console.log(window.location.search)
  let userId = window.location.search.slice(10)
  console.log('userId:', userId)
  return (
    <div className="App">
      <h1 className="header">GB test</h1>
    </div>
  );
}

export default App;
