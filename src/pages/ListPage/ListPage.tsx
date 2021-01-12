import React from "react";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import JobsTable from "../../components/JobsTable";

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
      <div>
        this is list page
        <JobsTable currentUser={currentUser!} />
      </div>
    );
  }
}

export default ListPage;
