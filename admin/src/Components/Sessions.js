import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Detailed from './Detailed'; // Import the Popup component

const modifyDate = (e) => {
  const date = new Date(e);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const Sessions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const  [ currentStatus, setCurrentStatus]  = useState(0);
  const [popupOpen, setPopupOpen] = useState(false); // Popup state
  const [selectedSession, setSelectedSession] = useState(null); // Store selected session

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
  }, [location.search]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name') || '';
    const phone = queryParams.get('phone') || '';
    const date = queryParams.get('date') || '';
    const timeSlot = queryParams.get('timeSlot') || '';
    const status = queryParams.get('status') ||'0';
    setCurrentStatus(status )
    // console.log(status)
    const startIndex = (currentPage - 1) * rowsPerPage;
    const limit = rowsPerPage;

    const queryString = new URLSearchParams({
      status,
      name,
      phone,
      date,
      timeSlot,
      startIndex: startIndex?.toString(),
      limit: limit.toString(),
    }).toString();

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL}/session-form/details?${queryString}`
        );
        setData(response.data.result || []);
        setTotalCount(response.data.totalCount || 0);
      } catch (error) {
        console.error('Error fetching sessions:', error);
      } finally {
        
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, rowsPerPage, location.search, popupOpen]);

  const totalPages = Math.ceil(totalCount / rowsPerPage);

  const handlePageChange = (direction) => {
    setCurrentPage((prev) => {
      if (direction === 'next') return Math.min(prev + 1, totalPages);
      if (direction === 'prev') return Math.max(prev - 1, 1);
      return prev;
    });
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const handleView = (session) => {
    // Set selected session details to show in the popup
    setSelectedSession(session);
    setPopupOpen(true); // Open the popup
  };

  return (
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none">
        <div className="p-6 px-0">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full mt-4 text-left table-auto min-w-max">
                  <thead>
                    <tr>
                      <th className="p-4 border-y bg-blue-gray-50/50">S. No</th>
                      <th className="p-4 border-y bg-blue-gray-50/50">Client Name</th>
                      <th className="p-4 border-y bg-blue-gray-50/50">Phone</th>
                      <th className="p-4 border-y bg-blue-gray-50/50">Date</th>
                      <th className="p-4 border-y bg-blue-gray-50/50">TimeSlot</th>
                      <th className="p-4 border-y bg-blue-gray-50/50"> {currentStatus==1 ? "Time" : "Actions"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((session, index) => (
                      <tr key={session.session_id}>
                        <td className="p-4 border-b text-center">
                          {index + 1 + (currentPage - 1) * rowsPerPage}
                        </td>
                        <td className="p-4 border-b">{session.name}</td>
                        <td className="p-4 border-b">{session.phone}</td>
                        <td className="p-4 border-b">{modifyDate(session.date)}</td>
                        <td className="p-4 border-b">{session.timeSlot.toUpperCase()}</td>
                        <td className="p-4 border-b">
                        { currentStatus == 0 ?
                          <button
                          className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                          onClick={() => handleView({...session, date : modifyDate(session.date)})}
                        >
                          View
                        </button>
                        :
                        session.sessionTime
                        
                        } 
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Rows per page and pagination */}
              <div className="flex justify-between items-center mt-4">
                {/* Rows per page selector */}
                <div>
                  <label htmlFor="rowsPerPage" className="mr-2">
                    Rows per page:
                  </label>
                  <select
                    id="rowsPerPage"
                    value={rowsPerPage}
                    onChange={handleRowsPerPageChange}
                    className="px-4 py-2 border rounded"
                  >
                    {[10, 20, 30, 40, 50].map((rows) => (
                      <option key={rows} value={rows}>
                        {rows}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Pagination */}
                <div className="flex items-center">
                  <button
                    onClick={() => handlePageChange('prev')}
                    className="px-4 py-2 border rounded mx-1"
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <span>
                    Page {currentPage} of {totalPages || 1}
                  </span>
                  <button
                    onClick={() => handlePageChange('next')}
                    className="px-4 py-2 border rounded mx-1"
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Popup Component */}
      <Detailed
        isOpen={popupOpen}
        onCloseDetailed={() => setPopupOpen(false)}
        details={selectedSession} // Pass the selected session details as props
      />
    </div>
  );
};

export default Sessions;
