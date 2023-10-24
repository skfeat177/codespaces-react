import React, { useEffect, useState } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import Skeleton from '@mui/material/Skeleton';

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data based on account ID
    const accountID = localStorage.getItem('accountID');
    const apiurl = process.env.REACT_APP_BACKEND_URL;

    if (accountID) {
      fetch(`${apiurl}/profile?id=${accountID}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data.user);
          setLoading(false); // Set loading to false when data is available
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          setLoading(false); // Set loading to false on error
        });
    }
  }, []);

  return (
    <section style={{ display: 'flex', marginTop: 120 }}>
      <MDBContainer className="py-5">
        {loading ? ( // Display skeleton while loading
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center" style={{display:'flex',justifyContent:"center",alignItems:'center',flexDirection:'column'}}>
                  <Skeleton variant="circular" sx={{marginBottom:2}} width={215} height={215} />
                  <Skeleton width={215} sx={{marginBottom:2}}/>
                  <Skeleton width={100} />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <Skeleton width={100} height={24} />
                  <hr />
                  <Skeleton width={100} height={24} />
                  <hr />
                  <Skeleton width={100} height={24} />
                  <hr />
                  <Skeleton width={100} height={24} />
                  <hr />
                  <Skeleton width={100} height={24} />
                  <hr />
                  <Skeleton width={100} height={24} />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        ) : (
          // Render user data once it's available
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://i.pinimg.com/474x/11/56/8c/11568c15850a74f4f1c9e3ee3627e1c1.jpg"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '215px' }}
                    fluid
                  />
                  <p style={{ fontSize: '2rem', fontWeight: 'bold' }} className="text-muted mb-1">
                    {userData.name}
                  </p>
                  <p className="text-muted mb-3">Joined {new Date(userData.accountCreated).toDateString()}</p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userData.name}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Username</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userData.username}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Paytm Number</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">+91 {userData.number}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Account ID</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userData._id}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Account Created</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {new Date(userData.accountCreated).toDateString()}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Quiz Participation</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userData.quizPlayed}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        )}
      </MDBContainer>
    </section>
  );
}
