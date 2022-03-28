import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable } from "react-table";
import { UsersAction } from "../../../store/actions/users";
import AdminModal from "../components/modal";

function PostTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  const [userModal, closeUsermodal] = useState(false);
  function clickBtn(a) {
    closeUsermodal(a);
  }
  // Render the UI for your table
  return (
    <>
      {userModal ? <AdminModal clickBtn={clickBtn} /> : ""}
      <div className="d-flex flex-row justify-content-center mt-5"></div>
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
                <td>
                  <div className="d-flex flex-row justify-content-between">
                    <i
                      onClick={() => closeUsermodal(true)}
                      className="bi bi-trash text-danger px-3 px-lg-0"
                      style={{
                        fontSize: 22,
                        fontWeight: "bolder",
                        cursor: "pointer",
                      }}
                    ></i>
                    <i
                      className="bi bi-box-arrow-in-up text-dark px-3 px-lg-0"
                      style={{
                        fontSize: 22,
                        fontWeight: "bolder",
                        cursor: "pointer",
                      }}
                    ></i>
                    <i
                      className="bi bi-eye text-dark px-3 px-lg-0"
                      style={{
                        fontSize: 22,
                        fontWeight: "bolder",
                        cursor: "pointer",
                      }}
                    ></i>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function AllUsers() {
  const dispatch = useDispatch();
  const users = useSelector((s) => s.users);
  const [loading, setLoading] = useState();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    dispatch(UsersAction());
  }, [dispatch]);
  useEffect(() => {
    if (users.isSuccessful) {
      setAllUsers(users.data);
      setLoading(false);
    } else if (users.isLoading) {
      setLoading(true);
    }
  }, [users]);
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
            Header: "email",
            accessor: "email",
          },
          {
            Header: "created_date",
            accessor: "join_date",
          },

          {
            Header: "Status",
            accessor: "status",
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => allUsers, [allUsers]);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      {!loading ? (
        <PostTable columns={columns} data={data} />
      ) : (
        <div className="col-10 mt-5 d-flex flex-row justify-content-center">
          <div class="spinner-border" role="status"></div>
        </div>
      )}
    </div>
  );
}

export default AllUsers;
