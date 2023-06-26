
import "./App.css";

function App() {
 

  return (
    <div>
      <h5>404 NOT FOUND</h5>
      <div className="container">
        <div className="image">
          <img src="/espantapajaros.png" alt="espantapajaros" />
        </div>
        <div className="content">
          <h1>I have bad news for you</h1>
          <p>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button className="button">BACK TO HOMEPAGE</button>
        </div>
      </div>
      <footer className="footer">
        Created by Cristian Jimenez - devChallenges.io
      </footer>
    </div>
  );
}


export default App;
