import "./assets/scss/main.scss";
import React from "react";
import { render } from "react-dom";
import Header from "./components/common/Header";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import AppContext from "./components/common/AppContext";
import Landing from "./components/pages/Landing";
import TodoApp from "./components/pages/TodoApp";
import UserApp from "./components/pages/UserApp";
import UserElement from "./components/user/UserElement";
import Error404 from "./components/common/Error404";

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <AppContext.Provider value={{ selection: "landing" }}>
        <div className="main">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/todo-list" element={<TodoApp />} />
              <Route path="/users" element={<UserApp />} />
              <Route path="/users/:id" element={<UserElement />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
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
