import "./App.css";

function App() {
  return (
    <div className="App">
      {/* You can add anything in start and end ogf the given text but not middle expected text is matching or not it will check these things */}

      {/*Checking with screen Reading text */}
      <p>ABC First React test Case ABC123a</p>
      <p>Software Testing</p>
      <img   title="GoogleImage"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfwAhgmyiHHQ7kj-aEbk9AGCKcwo0wYeuwg&s"
      />
      <br />
      <br />
      
      {/*Checking with the input box Testing*/}
      <input type='text' placeholder="Enter User Name" name='username' value='Shaik Shafi' id='userId' />
    </div>
  );
}

export default App;