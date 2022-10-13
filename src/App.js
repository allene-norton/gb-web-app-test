import './App.css';

function App() {
  //hello from web app
  console.log("I am the web app!")


  //get logged-in user id
  /*
  let userId = window.location.search.slice(10)
  console.log('userId:', userId)
  */


  // temporary client id
  let tempId = 'b7db1342-2158-476f-b967-55b6f5aec60d'

  //getClient URL
  const getClientURL = 'https://api-beta.joinportal.com/v1/client/'

  const options = {
    method: 'GET',
    headers: { accept: 'text/plain', 'X-API-KEY': process.env.REACT_APP_PORTAL_KEY },
  }
  async function getClient(){
    await fetch(getClientURL + tempId, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }
  
  return (
    <div className="App">
      <h1 className="header">GB test</h1>
    </div>
  );
}

export default App;
