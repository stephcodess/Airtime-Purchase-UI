import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTable } from 'react-table'
import { transactionsFetchAction } from '../../store/actions/transactions'

function Table({ columns, data }) {
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
  })

  // Render the UI for your table
  return (
    <>
      <div className='d-flex flex-row justify-content-center my-xl-5'>
        {/* <div>
          <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} /> Toggle
          All
        </div>
        {allColumns.map(column => (
          <div key={column.id} className='mx-5'>
            <label>
              <input type="checkbox" {...column.getToggleHiddenProps()} />{' '}
              {column.id}
            </label>
          </div>
        ))}
        <br /> */}
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} style={{borderBottom: "2px solid rgba(0,0,0,0.1)"}}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <br />
    </>
  )
}

function TransactionTable() {
  const dispatch = useDispatch();
  const transactions = useSelector((s) => s.transactions);
  const [loading, setLoading] = useState();
  const [allTransactions, setAllTransactions] = useState([]);

  useEffect(() => {
    dispatch(transactionsFetchAction({email:localStorage.getItem("authUser")}));
  }, [dispatch]);
  useEffect(() => {
    if (transactions.isSuccessful) {
      setAllTransactions(transactions.data);
      setLoading(false);
    } else if (transactions.isLoading) {
      setLoading(true);
    }
  }, [transactions]);
  const columns = React.useMemo(
    () => [
      {
        Header: 'All Transactions',
        columns: [
          {
            Header: 'id',
            accessor: 'id',
          },
          {
            Header: 'transaction_id',
            accessor: 'transaction_id',
          },
          {
            Header: 'type',
            accessor: 'type',
          },
          {
            Header: 'amount',
            accessor: 'amount',
          },
          {
            Header: 'transaction_date',
            accessor: 'date',
          },
          {
            Header: 'status',
            accessor: 'status',
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => allTransactions, [allTransactions])

  return (
    <div style={{width: "100%", backgroundColor: "#fff"}}>
      <Table columns={columns} data={data} />
    </div>
  )
}

export default TransactionTable
