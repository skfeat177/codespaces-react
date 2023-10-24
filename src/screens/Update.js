import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material'; // Import the Skeleton component from Material-UI

function UpdateTable() {
  const [updates, setUpdates] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a state for loading
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accountID = localStorage.getItem('accountID');
        const apiurl = process.env.REACT_APP_BACKEND_URL;

        const response = await fetch(`${apiurl}/profile?id=${accountID}`);
        if (response.ok) {
          const userData = await response.json();
          const supportMessageUpdates = userData.user.supportMessage.reverse();
          setUpdates(supportMessageUpdates);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); // Set loading to false when done
      }
    };

    fetchData();
  }, []);

  const handleViewDetail = (date, subject, message) => {
    // Navigate to the UpdateDetail page with route parameters
    navigate(`/updatedetail/${date}/${subject}/${message}`);
  };

  function formatSupportMessageDate(dateString) {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };

    const formattedDate = new Date(dateString).toLocaleString('en-US', options);
    return formattedDate;
  }

  return (
    <div className="container" style={{ marginTop: 100 }}>
      <h2>Get Updates here about your withdrawal and issues</h2>
      {isLoading ? ( // Show a skeleton loader while loading
        <div>
          <Skeleton animation="wave" height={40} width={ window.innerWidth > 768 ? 1020: 330} />
          <Skeleton animation="wave" height={40} width={ window.innerWidth > 768 ? 1020: 330} />
          <Skeleton animation="wave" height={40} width={ window.innerWidth > 768 ? 1020: 330} />
          <Skeleton animation="wave" height={40} width={ window.innerWidth > 768 ? 1020: 330} />
          <Skeleton animation="wave" height={40} width={ window.innerWidth > 768 ? 1020: 330} />
          <Skeleton animation="wave" height={40} width={ window.innerWidth > 768 ? 1020: 330} />
          <Skeleton animation="wave" height={40} width={ window.innerWidth > 768 ? 1020: 330} />

        </div>
      ) : updates.length === 0 ? ( // If no updates are available
        <p>No New Updates are available</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Update</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {updates.map((update, index) => (
              <tr key={index}>
                <td>{formatSupportMessageDate(update.Date)}</td>
                <td>{update.subject}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      handleViewDetail(update.Date, update.subject, update.message)
                    }
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UpdateTable;
