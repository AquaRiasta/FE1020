import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    console.log("ErrorBoundary render");

    if (this.state.hasError) {
      return (
        <div className="user__container">
          <div className="user__detail">
            <h1 className="user__error--title">User not found</h1>
            <h2 className="user__error--subtitle">
              Please return to the previous page
            </h2>
            <Link to="/users" className="user__link">
              <button className="user__detail--button button button__box">
                ↩️ Return
              </button>
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
