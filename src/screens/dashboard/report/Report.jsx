import React, { useState } from 'react';
import '../../../styles/Report.css';
import ReactPaginate from 'react-paginate';

const Report = () => {
  const [data, setData] = useState([
    { id: 1, timestamp: '2024-09-29 00:18:09', bin1: 32, bin2: 45, bin3: 23, bin4: 51, comments: 'All bins working fine' },
    { id: 2, timestamp: '2024-09-29 00:44:23', bin1: 36.15, bin2: 47.55, bin3: 50.45, bin4: 0, comments: 'No issues' },
    { id: 3, timestamp: '2024-09-29 00:44:53', bin1: 46.72, bin2: 46.04, bin3: 49.45, bin4: 56.25, comments: 'No issues' },
    { id: 4, timestamp: '2024-09-29 00:51:26', bin1: 38.67, bin2: 16.61, bin3: 49.51, bin4: 0, comments: 'No issues' },
    { id: 5, timestamp: '2024-09-29 00:51:29', bin1: 38.61, bin2: 16.62, bin3: 56.84, bin4: 0, comments: 'No issues' },
    { id: 6, timestamp: '2024-09-29 00:51:36', bin1: 36.62, bin2: 56.28, bin3: 57.28, bin4: 0, comments: 'No issues' },
    { id: 7, timestamp: '2024-09-29 00:51:33', bin1: 38.61, bin2: 46.12, bin3: 57.12, bin4: 57.71, comments: 'No issues' },
  ]);

  const [pageNumber, setPageNumber] = useState(0);

  const rowsPerPage = 5;
  const pagesVisited = pageNumber * rowsPerPage;

  const deleteRow = (id) => {
    setData(data.filter(row => row.id !== id));
  };

  const displayRows = data.slice(pagesVisited, pagesVisited + rowsPerPage).map(row => (
    <tr key={row.id}>
      <td>{row.id}</td>
      <td>{row.timestamp}</td>
      <td>{row.bin1}</td>
      <td>{row.bin2}</td>
      <td>{row.bin3}</td>
      <td>{row.bin4}</td>
      <td>{row.comments}</td>
      <td><button onClick={() => deleteRow(row.id)}>Delete</button></td>
    </tr>
  ));

  const pageCount = Math.ceil(data.length / rowsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="dashboard-container">
      <h1>Waste Level Management</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Timestamp</th>
            <th>Bin 1 Level</th>
            <th>Bin 2 Level</th>
            <th>Bin 3 Level</th>
            <th>Bin 4 Level</th>
            <th>Comments</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayRows}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"previous-link"}
        nextLinkClassName={"next-link"}
        disabledClassName={"pagination-disabled"}
        activeClassName={"pagination-active"}
      />
    </div>
  );
};

export default Report;
