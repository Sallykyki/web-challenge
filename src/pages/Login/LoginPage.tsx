import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getUsers } from "../../data/fetchData";

interface IProps {}

interface IState {
  username: string;
  password: string;
}

class LoginPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onUsernameChange = (e: any) => {
    this.setState({ username: e.target.value });
  };

  onPasswordChange = (e: any) => {
    this.setState({ password: e.target.value });
  };

  handleClick = (e: any) => {
    e.preventDefault();

    const users = getUsers();
    const payload = {
      username: this.state.username,
      password: this.state.password,
    };

    const validation = users.some(
      (user) =>
        user.name === payload.username && user.password === payload.password
    );

    if (validation) {
    } else {
    }
  };

  render() {
    return (
      <Form className="component-LoginPage">
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            placeholder="Enter your username"
            onChange={this.onUsernameChange}
            value={this.state.username}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            onChange={this.onPasswordChange}
            value={this.state.password}
          />
        </Form.Group>
        <Button variant="primary" onClick={this.handleClick}>
          Login
        </Button>
      </Form>
    );
  }
}

export default LoginPage;
