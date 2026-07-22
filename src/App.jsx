import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
          <br/>
          New changes added here
          <br></br>
          This is the first project in GitHub Codespaces. I am learning React and GitHub Codespaces.
        </p>
     <button>
      I'm a button
    </button>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>

        <table>
          <thead>
            <tr>
              <th>workorder</th>
              <th>lot</th>
              <th>alloy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SW123123121</td>
              <td>21043245011</td>
              <td>C5A1</td>
            </tr>
             <tr>
              <td>SW123123123</td>
              <td>21043245012</td>
              <td>C7A1</td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
