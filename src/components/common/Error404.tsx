import React from "react";
import { Link } from "react-router-dom";

class Error404 extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="error404__container">
        <div className="error404">
          <h1>Error 404</h1>
          <h2>Page not found</h2>
          <Link to="/" className="error404__link">
              <button className="error404__detail--button button button__box">
                ↩️ Return home
              </button>
            </Link>
        </div>
      </div>
    );
  }
}

export default Error404;
