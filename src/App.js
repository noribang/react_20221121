// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { format } from "date-fns";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <h1>{format(new Date(), "MMMM do yyyy, h:mm:ss a")}</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the HTML,
        and also allows us to add in components, which are separate, self-contained
        chunks of JSX.
      </p>
      {/* <ExampleComponent /> */}
    </div>
  );
}

export default App;
