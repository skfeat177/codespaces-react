import React, { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
export default function ProfilePage() {
    const navigate = useNavigate(); 
    const [paymentHistory, setPaymentHistory] = useState(null);
    const [points, setPoints] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const accountID = localStorage.getItem('accountID');
        const apiurl = process.env.REACT_APP_BACKEND_URL;

        // Function to fetch payment history
        const fetchPaymentHistory = () => {
            if (accountID) {
                fetch(`${apiurl}/paymenthistory?id=${accountID}`)
                    .then((response) => response.json())
                    .then((data) => {
                        const dataLatest = data.reverse()
                        setPaymentHistory(data);
                    })
                    .catch((error) => {
                        console.error('Error fetching payment history:', error);
                    });
            }
        };

        // Function to fetch points
        const fetchPoints = () => {
            if (accountID) {
                fetch(`${apiurl}/getpoints?id=${accountID}`)
                    .then((response) => response.json())
                    .then((data) => {
                        setPoints(data.currentPoints);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error('Error fetching points:', error);
                    });
            }
        };

        // Simultaneously fetch payment history and points
        const fetchAllData = async () => {
            await Promise.all([fetchPaymentHistory(), fetchPoints()]);
  
        };

        fetchAllData();
    }, []);

    return (
        <section className="d-flex flex-wrap justify-content-center mt-4">
            <MDBContainer className="py-5" style={{ marginTop: 100 }}>
                <MDBRow>
                    <MDBCol lg="4" md="12" className="mb-4">
                        <MDBCard>
                            <MDBCardBody className="text-center">
                                {loading ? ( // Display Skeleton while loading
                                    <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column' }}>
                                        <Skeleton variant="rounded" width={230} height={230} />
                                        <Skeleton width={150} height={30} style={{ margin: '10px auto' }} />
                                        <Skeleton width={100} height={20} />
                                        <Skeleton width={80} height={40} />
                                    </div>
                                ) : (
                                    <>
                                        <MDBCardImage
                                            src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/wallet.png"
                                            alt="avatar"
                                            style={{ width: '70%' }}
                                            fluid
                                        />
                                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="text-muted mb-1">
                                            Wallet Balance
                                        </p>
                                        <p style={{ fontSize: '1.2rem' }} className="text-muted mb-3">
                                           <span style={{color:(points<0)?"red":""}}> {points}</span> Points
                                        </p>
                                        <div className="d-flex justify-content-center mb-2">
                                            <button className="btn btn-primary"
                                                onClick={() => {
                                                    navigate(`/redeem`)
                                                  }}
                                            >Redeem</button>
                                        </div>
                                    </>
                                )}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8" md="12" className="mb-4">
                        <MDBCard>
                            <MDBCardBody>
                                {loading ? ( // Display Skeleton while loading
                                <>
                                    <Skeleton animation="wave" height={37} />
                                    <Skeleton animation="wave" height={37} />
                                    <Skeleton animation="wave" height={37} />
                                    <Skeleton animation="wave" height={37} />
                                    <Skeleton animation="wave" height={37} />
                                    <Skeleton animation="wave" height={37} />
                                    <Skeleton animation="wave" height={37} />
                                    <Skeleton animation="wave" height={37} />
                                    <Skeleton animation="wave" height={37} />
             
                                    </>
                                ) : (
                                    <div className="table-responsive">
                                        {paymentHistory && paymentHistory.length > 0 ? (
                                            <table className="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th>Transaction</th>
                                                        <th>Method</th>
                                                        <th>Amount</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {paymentHistory.map((payment) => (
                                                        <tr key={payment._id}>
                                                            <td>{payment.transactionID}</td>
                                                            <td>{payment.method}</td>
                                                            <td>Rs.{payment.amount/100}</td>
                                                            <td style={{color:(payment.status == "Pending" || payment.status == "Rejected")?"red":"green"}}>{payment.status}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        ) : (
                                            <p>No Payments have been Requested yet</p>
                                        )}
                                    </div>
                                )}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
