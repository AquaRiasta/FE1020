import * as React from "react";
import { render } from "react-dom";
import Header from "./components/common/Header";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AppContext from "./components/common/AppContext";
import Landing from "./components/pages/Landing";
import TodoApp from "./components/pages/TodoApp";

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <AppContext.Provider value={{ selection: "landing" }}>
        <div className="main">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/todo-list" element={<TodoApp />} />
              {/* <Route path="/users" element={UserApp} /> */}
              {/* <Route element={NotFound} /> */}
            </Routes>
          </Router>
        </div>
      </AppContext.Provider>
    );
  }
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
