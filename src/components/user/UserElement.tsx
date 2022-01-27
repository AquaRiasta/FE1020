import React from "react";
import UserErrorBoundary from "./UserErrorBoundary";
import { Link } from "react-router-dom";

interface UserInfo {
  name: string;
  username: string;
  company: string;
  email: string;
  address: string;
  number: string;
  website: string;
  id: number;
}

class User extends React.Component {
  state = {
    user: {} as UserInfo,
    userNotFound: false,
    fetchedAPI: false,
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://fc5y-fe.s3.us-east-2.amazonaws.com/users.json"
      );
      const data = await response.json();
      const userData = data.map((user: any) => {
        const formattedUser: UserInfo = {
          name: user.name,
          username: user.username,
          company: user.company.name,
          email: user.email,
          address: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
          number: `${user.phone.split(" ")[0]}`,
          website: user.website,
          id: user.id,
        };
        return formattedUser;
      });
      this.setState({ user: userData[Number(this.getID()) - 1] || {} });
      if (!this.state.user.name) this.setState({ userNotFound: true });
      else this.setState({ fetchedAPI: true });
    } catch (error) {
      console.log(error);
    }
  }

  getID = () => {
    const params = window.location.pathname.split("/");
    return params[params.length - 1];
  };

  render() {
    if (this.state.userNotFound) throw new Error("User not found");

    return this.state.fetchedAPI ? (
      <div className="user__container">
        <div className="user__detail">
          <h1 className="user__detail--name heading heading__title">
            {this.state.user.name}
          </h1>
          <h2 className="user__detail--username heading heading__subtitle">
            {this.state.user.username}
          </h2>
          <h3 className="user__detail--company heading heading__info">
            🏢 {this.state.user.company}
          </h3>
          <h3 className="user__detail--email heading heading__info">
            ✉️ {this.state.user.email}
          </h3>
          <h3 className="user__detail--address heading heading__info">
            🏠 {this.state.user.address}
          </h3>
          <h3 className="user__detail--number heading heading__info">
            📞 {this.state.user.number}
          </h3>
          <h3 className="user__detail--website heading heading__info">
            🖥️ {this.state.user.website}
          </h3>
          <Link to="/users" className="user__detail--link">
            <button className="user__detail--button button button__box">
              ↩️ Return
            </button>
          </Link>
        </div>
      </div>
    ) : (
      <div className="user__container">
        <div className="user__detail">Loading...</div>
      </div>
    );
  }
}

class UserElement extends React.Component {
  render() {
    return (
      <UserErrorBoundary>
        <User />
      </UserErrorBoundary>
    );
  }
}

export default UserElement;
