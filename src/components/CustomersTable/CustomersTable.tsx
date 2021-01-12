import React from "react";
import BootstrapTable, { ColumnDescription } from "react-bootstrap-table-next";
import { getCustomers } from "../../data/fetchData";

const columns: ColumnDescription[] = [
  {
    dataField: "name",
    text: "Customer name",
    sort: true,
  },
  {
    dataField: "location",
    text: "Location",
    sort: true,
  },
];

const CustomersTable = () => {
  return (
    <BootstrapTable
      keyField="name"
      data={getCustomers()}
      columns={columns}
      bootstrap4
    ></BootstrapTable>
  );
};

export default CustomersTable;
