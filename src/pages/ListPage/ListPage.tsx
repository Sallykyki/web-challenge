import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import JobsTable from "../../components/JobsTable";
import UsersTable from "../../components/UsersTable";
import CustomersTable from "../../components/CustomersTable";
import Container from "react-bootstrap/esm/Container";
import "./ListPage.scss";

interface IProps {}

interface IState {}

class ListPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const currentUser = localStorage.getItem("loggedAccount");
    console.log(currentUser);
    return (
      <Container fluid className="component-ListPage">
        <h1>Dashboard</h1>
        <Tabs defaultActiveKey="jobs">
          <Tab eventKey="jobs" title="JOBS">
            <JobsTable currentUser={currentUser!} />
          </Tab>
          <Tab eventKey="profile" title="USERS">
            <UsersTable />
          </Tab>
          <Tab eventKey="contact" title="CUSTOMERS">
            <CustomersTable />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default ListPage;
