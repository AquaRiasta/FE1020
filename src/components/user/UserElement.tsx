import React from "react";
import { useParams } from "react-router";
import { Route, Routes } from "react-router-dom";

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

class UserElement extends React.Component {
  state = {
    user: {} as UserInfo,
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
    } catch (error) {
      console.log(error);
    }
  }

  getID = () => {
    const params = window.location.pathname.split("/");
    return params[params.length - 1];
  };

  render() {
    return (
      <div className="user__detail">
        <div className="user__detail--name heading heading__title">{this.state.user.name}</div>
        <div className="user__detail--username heading heading__subtitle">{this.state.user.username}</div>
        <div className="user__detail--company heading heading__info">🏢 {this.state.user.company}</div>
        <div className="user__detail--email heading heading__info">✉️ {this.state.user.email}</div>
        <div className="user__detail--address heading heading__info">🏠 {this.state.user.address}</div>
        <div className="user__detail--number heading heading__info">📞 {this.state.user.number}</div>
        <div className="user__detail--website heading heading__info">🖥️ {this.state.user.website}</div>
      </div>
    );
  }
}

export default UserElement;
