import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { getUsers } from "../../data/fetchData";

const UsersTable = () => {
  return (
    <BootstrapTable data={getUsers()} version="4">
      <TableHeaderColumn isKey dataField="username">
        Username
      </TableHeaderColumn>
      <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
    </BootstrapTable>
  );
};

export default UsersTable;
