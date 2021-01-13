import React, { Component, FunctionComponent } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { getJob, updateJob } from "../../data/fetchData";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "./JobPage.scss";

interface IJobPageParams {
  id: string;
}

const jobStatuses = ["ongoing", "pending", "closed"];

interface IProps extends RouteComponentProps<IJobPageParams> {}
interface IState {
  job: any;
}

class JobPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      job: null,
    };
  }

  componentDidMount() {
    this.fetchJob();
  }

  fetchJob = () => {
    const { match } = this.props;

    const job = getJob(match.params.id);
    this.setState({ job });
  };

  render() {
    const { job } = this.state;

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
                      <div className="component-JobPage__info--id">
                        <b>Job ID:</b> {job.id}
                      </div>
                      <div className="component-JobPage__info--status">
                        <b>Status:</b>
                        <DropdownButton title={job.status}>
                          {jobStatuses
                            .filter((status) => status !== job.status)
                            .map((status, idx) => (
                              <Dropdown.Item
                                key={idx}
                                as="button"
                                onClick={() => {
                                  updateJob(job.id, { ...job, status });
                                  this.fetchJob();
                                }}
                              >
                                {status}
                              </Dropdown.Item>
                            ))}
                        </DropdownButton>
                      </div>
                      <div className="component-JobPage__info--details">
                        <b>Info:</b> {job.info}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tasks">
                      <h2 className="component-JobPage__tab-heading">
                        Job tasks
                      </h2>
                      {job.tasks.map((task: any, idx: any) => (
                        <ul>
                          <li key={idx}>
                            {task.name}. Due date: {task.dueDate}
                          </li>
                        </ul>
                      ))}
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(JobPage);
