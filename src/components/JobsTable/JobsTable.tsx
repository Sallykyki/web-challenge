import React from "react";
import BootstrapTable, { ColumnDescription } from "react-bootstrap-table-next";
import { Link } from "react-router-dom";
import { getJobs } from "../../data/fetchData";

interface IProps {
  currentUser: string;
}

const columns: ColumnDescription[] = [
  {
    dataField: "id",
    text: "Job ID",
    sort: true,
  },
  {
    dataField: "name",
    text: "Job name",
    sort: true,
    formatter: (cell, row, rowIndex, formatExtraData) => {
      return <Link to={`/job/${row.id}`}>{cell}</Link>;
    },
  },
  {
    dataField: "customerName",
    text: "Customer",
    sort: true,
  },
  {
    dataField: "customerLocation",
    text: "Location",
    sort: true,
  },
  {
    dataField: "dateStart",
    text: "Date start",
    sort: true,
  },
  {
    dataField: "dateEnd",
    text: "Date end",
    sort: true,
  },
  {
    dataField: "status",
    text: "Status",
    sort: true,
  },
];

const JobsTable = ({ currentUser }: IProps) => {
  return (
    <BootstrapTable
      keyField="id"
      data={getJobs(currentUser)}
      columns={columns}
      bootstrap4
    ></BootstrapTable>
  );
};

export default JobsTable;
