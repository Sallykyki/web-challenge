import React from "react";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { getJobs } from "../../data/fetchData";

interface IProps {
  currentUser: string;
}

const JobsTable = ({ currentUser }: IProps) => {
  return (
    <BootstrapTable data={getJobs(currentUser)} version="4">
      <TableHeaderColumn isKey dataField="id">
        Job ID
      </TableHeaderColumn>
      <TableHeaderColumn dataField="name">Job name</TableHeaderColumn>
      <TableHeaderColumn dataField="customerName">Customer</TableHeaderColumn>
      <TableHeaderColumn dataField="customerLocation">
        Location
      </TableHeaderColumn>

      <TableHeaderColumn dataField="dateStart">Date start</TableHeaderColumn>
      <TableHeaderColumn dataField="dateEnd">Date end</TableHeaderColumn>
      <TableHeaderColumn dataField="status">Status</TableHeaderColumn>
    </BootstrapTable>
  );
};

export default JobsTable;
