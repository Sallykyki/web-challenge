import React from "react";
import BootstrapTable, { ColumnDescription } from "react-bootstrap-table-next";
import { getUsers } from "../../data/fetchData";

const columns: ColumnDescription[] = [
  {
    dataField: "username",
    text: "Username",
    sort: true,
  },
  {
    dataField: "name",
    text: "Name",
    sort: true,
  },
];

const UsersTable = () => {
  return (
    <BootstrapTable
      keyField="username"
      data={getUsers()}
      columns={columns}
      bootstrap4
    ></BootstrapTable>
  );
};

export default UsersTable;
