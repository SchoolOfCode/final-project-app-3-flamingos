import React from "react";
import logo from "./logo.svg";
import css from "./App.module.css";

function App() {
    return (
        <div className={css.app}>
            <header className={css.appheader}>
                <img src={logo} className={css.applogo} alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className={css.applink}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
