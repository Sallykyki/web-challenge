import React, { FunctionComponent } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface IJobPageParams {
  id: string;
}

interface IProps extends RouteComponentProps<IJobPageParams> {}

const JobPage: FunctionComponent<IProps> = (props) => {
  const { match } = props;

  return <div>Page {match.params.id}</div>;
};

export default withRouter(JobPage);
