import React, { FunctionComponent } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { getJob } from "../../data/fetchData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ChatBox from "../../components/ChatBox";
import "./JobPage.scss";

interface IJobPageParams {
  id: string;
}

interface IProps extends RouteComponentProps<IJobPageParams> {}

const JobPage: FunctionComponent<IProps> = (props) => {
  const { match } = props;

  const job = getJob(match.params.id);

  if (!job) {
    return <div>Job is not found</div>;
  }

  return (
    <Container className="component-JobPage" fluid>
      <Row>
        <Col sm={9}>
          <h1>Job: {job.name}</h1>
          <Tab.Container id="left-tabs-example" defaultActiveKey="info">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="info">Info</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tasks">Tasks</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="photos">Photos</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="info">
                    <h2 className="component-JobPage__tab-heading">
                      Job information
                    </h2>
                    <p>Job ID: {job.id}</p>
                    <p>Status: {job.status}</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tasks">
                    <h2 className="component-JobPage__tab-heading">
                      Job tasks
                    </h2>
                  </Tab.Pane>
                  <Tab.Pane eventKey="photos">
                    <h2 className="component-JobPage__tab-heading">
                      Archived photos
                    </h2>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
        <Col>
          <h2>Room for discussion</h2>
          <ChatBox />
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(JobPage);
