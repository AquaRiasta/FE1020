import React from "react";
import { Link } from "react-router-dom";
import UserElement from "./UserElement";

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

class UserList extends React.Component {
  state = {
    users: [],
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
      this.setState({ users: userData || [] });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="user__list container">
        {this.state.users.map((user: UserInfo) => {
          return (
            <Link to={`/users/${user.id}`} key={user.id}>
              <div className="user__name heading__title heading">{user.name}</div>
              <div className="user__username heading__subtitle heading">{user.username}</div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default UserList;
