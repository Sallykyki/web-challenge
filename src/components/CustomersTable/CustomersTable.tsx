import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { getCustomers } from "../../data/fetchData";

const CustomersTable = () => {
  return (
    <BootstrapTable data={getCustomers()} version="4">
      <TableHeaderColumn isKey dataField="name">
        Customer name
      </TableHeaderColumn>
      <TableHeaderColumn dataField="location">Location</TableHeaderColumn>
    </BootstrapTable>
  );
};

export default CustomersTable;
