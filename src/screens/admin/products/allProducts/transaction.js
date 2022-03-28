import React from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";
import Button from "../../../../components/customButton/button";
import { CREATEPRODUCT } from "../../../../constants/routeNames";

import makeData from "./metaData";

function PostTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <>
      <div className="col-5 mt-5">
        <Link to={CREATEPRODUCT}>
          <Button
            brColor="#fff"
            title={
              <div className="d-flex flex-row justify-content-between align-items-center">
                <i
                  className="bi bi-plus-circle"
                  style={{
                    fontSize: 30,
                    fontWeight: "bolder",
                    marginRight: 10,
                  }}
                ></i>
                Create Product
              </div>
            }
            color="#fff"
            className="bg-primary"
            height={55}
            br={10}
          />
        </Link>
      </div>
      <div className="d-flex flex-row justify-content-center my-5"></div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                style={{ borderBottom: "2px solid rgba(0,0,0,0.1)" }}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function AllProducts() {
  const columns = React.useMemo(
    () => [
      {
        Header: "All Posts",
        columns: [
          {
            Header: "Id",
            accessor: "id",
          },
          {
            Header: "Title",
            accessor: "title",
          },
          {
            Header: "Body",
            accessor: "body",
          },
          {
            Header: "Image",
            accessor: "image",
          },
          {
            Header: "Created Date",
            accessor: "created_date",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Action",
            accessor: "action",
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(5), []);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <PostTable columns={columns} data={data} />
    </div>
  );
}

export default AllProducts;
